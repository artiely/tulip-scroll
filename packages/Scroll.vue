<template>
  <div
    class="tulip-scroller-wrapper"
    ref="scrollWrapper"
  >
    <div
      ref="scroll"
      class="tulip-scroller tulip-scroller-hardware"
      :style="{paddingTop:0+'px',...wrapStyle}"
    >
      <div class="above-top">
        <slot name="aboveTop"></slot>
      </div>
      <slot
        name="aboveWrap"
        :aboveWrapHeight="aboveWrapHeight"
      >
        <div
          class="above-wrap tulip-scroller-hardware"
          ref="above"
          v-show="above.isBounce"
          :style="{...aboveWrapStyle}"
        >
          <div
            class="above-content"
            :style="{justifyContent:above.align,}"
          >
            <slot
              name="above"
              :aboveWrapHeight="aboveWrapHeight"
              :aboveState="aboveState"
              :isAboveNoMore="isAboveNoMore"
            >
              <div
                class="above-inner"
                v-if="above.style==='default'"
              >
                <original
                  :y="aboveWrapHeight"
                  :offset="above.offset|| above.hoverHeight"
                  :aboveState="aboveState"
                />
              </div>
              <div v-else-if="above.style==='solo'">
                <solo
                  :y="aboveWrapHeight"
                  :above="true"
                  :textShow="isAboveNoMore"
                  :offset="above.offset|| above.hoverHeight"
                  :aboveState="aboveState"
                />
              </div>
              <div v-else-if="above.style==='classic'">
                <classic
                  :y="aboveWrapHeight"
                  :offset="above.offset||above.hoverHeight"
                  :aboveState="aboveState"
                />
              </div>
            </slot>
          </div>
        </div>
      </slot>
      <!-- content -->
      <div
        class="tulip-scroller-content"
        ref="scrollContent"
      >
        <div
          class="tulip-scroller-inner"
          ref="scrollInner"
        >
          <slot></slot>
        </div>
        <!-- below-wrap -->
        <div
          class="below-wrap"
          ref="below"
        >
          <slot
            name="below"
            :belowState="belowState"
            :isBelowNoMore="isBelowNoMore"
          >
            <div v-show="below.style==='default'">
              <div v-show="belowState==='loading'&&!isBelowNoMore">
                <slot name="below">加载中</slot>
              </div>
              <div v-show="isBelowNoMore">
                <slot name="isBelowEnd">没有更多内容了</slot>
              </div>
            </div>
            <div v-show="below.style==='solo'||below.style==='classic'">
              <solo
                :belowState="belowState"
                :textShow="isBelowNoMore"
                :below="true"
              />
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import solo from './solo'
import classic from './classic'
import original from './original'
import Animation from './animate'
const aboveOpt = {
  isBounce: true,
  style: 'none',
  easeTime: 300,
  top: 0,
  align: 'flex-end', // start center end 刷新指示器的位置
  isLock: false, // 是否禁止下拉
  isEndless: false, // 是否可不停的下拉(开启后在加载的过程中可以继续下拉并会执行多次回调)
  offset: 90, // 下拉的阈值[50,100]
  hoverHeight: 0, // 下拉结束后的悬停高度[0,100]
  hoverDelay: 0, // 下拉后的悬停时间[0,2000]
  inOffsetRate: 0.6, // 阈值内的下拉难度系数[0.2,0.8]
  outOffsetRate: 0.3, // 阈值外的下拉难度系数 [0.2,0.8]
  minAngle: 45, // 下拉的角度阈值 [30,60]
  bottomOffset: 0, // 结束的阈值 [0,100]
  pullingDown: pullingY => { }, // 下拉过程中一直回调
  inOffset: type => { }, // 进入下拉阈值那一刻
  outOffset: (type, done) => {
    // done()
  }, // 超出下拉阈值那一刻（一般用于刷新回调）
  pullingEnd: done => {
    done()
    return true // 系统默认return true 这样在就知道在默认情况下怎么处理松手的后续操作
  } // 下拉结束那一刻（包含松开手指和自动结束）
}

const belowOpt = {
  style: 'none',
  isLock: false, // 是否禁止上拉
  threshold: 90, // 上拉的阈值[50,100]
  callback: done => {
    setTimeout(() => {
      done()
    }, 1000)
  }
}
export default {
  name: 'tulipScroll',
  components: {
    solo,
    classic,
    original
  },
  props: {
    aboveOpt: {
      type: Object,
      default: () => {
        return {}
      }
    },
    belowOpt: {
      type: Object,
      default: () => {
        return {}
      }
    },
    wrapStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    aboveWrapStyle: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      // 动画实例的队列
      animateIds: [],
      // 当前设备的高度
      clientHeight: 0,
      // 当前滚动条的高度
      scrollTop: 0,
      startPoint: 0, // 手指按下的起点
      lastPoint: 0, // 手指移动后的点
      isScrollTo: false, // 是否在执行滚动
      isTouchend: true, // 标记是否结束touchend
      aboveWrapHeight: 0, // 上拉指示器容器的高度
      aboveState: 'over', // 下拉的状态
      belowState: 'over',
      beLowLoading: false,
      isBelowLoadingEnd: false,
      isBelowNoMore: false,
      isAboveNoMore: false,
      animate: null// 当前的动画实例
    }
  },
  computed: {
    above () {
      return { ...aboveOpt, ...this.aboveOpt }
    },
    below () {
      return { ...belowOpt, ...this.belowOpt }
    },
    // 判定当前的设备
    os () {
      var u = navigator.userAgent
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // 是否为ios设备
      var isPC = typeof window.orientation === 'undefined' // 是否为PC端
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // 是否为android端

      return {
        ios: isIOS,
        pc: isPC,
        android: isAndroid
      }
    }
  },
  watch: {
    $route: {
      handler (val) {
        if (val) {
          this.setScrollTop(this.scrollTop)
        }
      }
    }
  },
  mounted () {
    this.scrollDom = this.$refs.scroll
    this.scrollWrapperDom = this.$refs.scrollWrapper
    this.aboveDom = this.$refs.above
    this.scrollContentDom = this.$refs.scrollContent
    this.watchDom(this.scrollDom)
    this.clientHeight = this.scrollDom.clientHeight
    this.belowDom = this.$refs.below
    this.initScroll()
  },
  methods: {
    initScroll () {
      let vm = this
      vm.scrollDom.addEventListener('mousedown', vm.touchstartEvent) // PC端鼠标事件
      vm.$once('hook:destroyed',()=>{
        vm.scrollDom.removeEventListener('mousedown', vm.touchstartEvent)
      })
      vm.scrollDom.addEventListener('touchstart', vm.touchstartEvent, {
        passive: false
      }) // 移动端手指事件
      vm.$once('hook:destroyed',()=>{
        vm.scrollDom.removeEventListener('touchstart', vm.touchstartEvent)
      })
      vm.scrollDom.addEventListener('touchmove', vm.touchmoveEvent, {
        passive: false
      })
      vm.$once('hook:destroyed',()=>{
        vm.scrollDom.removeEventListener('touchmove', vm.touchmoveEvent)
      })
      // 移动端手指的滑动事件
      vm.scrollDom.addEventListener('mouseup', vm.touchendEvent) // PC端鼠标抬起事件
      vm.$once('hook:destroyed',()=>{
        vm.scrollDom.removeEventListener('mouseup', vm.touchendEvent)
      })
      vm.scrollDom.addEventListener('mouseleave', vm.touchendEvent) // PC端鼠标离开事件
      vm.$once('hook:destroyed',()=>{
        vm.scrollDom.removeEventListener('mouseleave', vm.touchendEvent)
      })
      vm.scrollDom.addEventListener('touchend', vm.touchendEvent, {
        passive: false
      }) // 移动端手指事件
      vm.$once('hook:destroyed',()=>{
        vm.scrollDom.removeEventListener('touchend', vm.touchendEvent)
      })
      vm.scrollDom.addEventListener('touchcancel', vm.touchendEvent, {
        passive: false
      }) // 移动端系统停止跟踪触摸
      vm.$once('hook:destroyed',()=>{
        vm.scrollDom.removeEventListener('touchcancel', vm.touchendEvent)
      })
      vm.scrollDom.addEventListener('scroll', vm.scrollEvent, {
        passive: false
      }) // 移动端系统停止跟踪触摸
      vm.$once('hook:destroyed',()=>{
        vm.scrollDom.removeEventListener('scroll', vm.scrollEvent)
      })
      // 部分安卓机在滑动时窗口会改变大小
      vm.$emit('init', vm)
    },
    /**
     * 鼠标或手指的按下事件
     * @param {*} e 事件源
     * 如果列表正在执行scrollTo,则阻止事件,优先执行scrollTo方法
     * 记录起点
     * 重置上次move的点
     * 手指触摸的最大范围
     * 标记是否touchend
     * 在顶部给PC端添加move事件便于PC调试
     * 在顶部禁止PC端拖拽图片,避免与下拉刷新冲突
     */
    touchstartEvent (e) {
      var vm = this
      // 如果在执行动画的过程中就结束
      if (vm.isScrollTo && !vm.above.isEndless) {
        vm.startPoint = null
        vm.preventDefault(e)
        return
      }
      vm.startPoint = vm.getPoint(e)
      vm.lastPoint = vm.startPoint
      vm.maxTouchmoveY = vm.getBodyHeight() - vm.above.bottomOffset
      vm.isTouchend = false
      let { scrollTop } = vm.getScrollInfo()
      // pc监听鼠标和禁用拖拽
      if (vm.os.pc && scrollTop <= 0) {
        vm.scrollDom.addEventListener('mousemove', vm.touchmoveEvent, {
          passive: false
        })
        document.ondragstart = () => {
          return false
        }
      }
    },
    /**
     * 鼠标或手指的滑动事件
     * @param {*} e 事件源
     * isScrolling 标记列表是否在惯性滑动中
     * moveY > 0 向下拉
     */
    touchmoveEvent (e) {
      let vm = this
      if (!vm.startPoint) return

      vm.isScrolling = false
      vm.setBounce(false)
      let { scrollTop } = vm.getScrollInfo()
      vm.scrollTop = scrollTop
      var curPoint = vm.getPoint(e) // 当前点
      var moveY = curPoint.y - vm.startPoint.y // 和起点比,移动的距离,大于0向下拉,小于0向上拉
      vm.moveY = moveY
      if (moveY > 0) {
        if (scrollTop <= 0) {
          vm.pullingDownEvent(curPoint, e)
        }
      } else if (moveY < 0) {
        if (vm.toBottom() <= 0) {
          vm.preventDefault(e)
          vm.setOverflowScrolling('auto')
          if (vm.below.belowState === 'over') {
            vm.scrollLoad()
          }
        }
      }
      this.$emit('pulling', {
        e: e,
        moveY: moveY
      })
      vm.lastPoint = curPoint // 记录本次移动的点
    },
    /**
    * 页面滚动触发事件
    * 顶部阻止默认事件
    * 底部进入阈值触发回调
    * 触摸结束进入惯性滑动scrolling事件
    */
    scrollEvent (e) {
      let vm = this
      let { scrollTop, scrollHeight } = vm.getScrollInfo()
      vm.scrollTop = scrollTop
      if (parseInt(scrollTop) <= 0) {
        vm.preventBounce(e)
        vm.setBounce(false)
      }
      let scrollDiff = scrollTop - vm.preScrollY
      let isUp = scrollDiff > 0
      let toBottom = vm.toBottom()
      if (isUp && toBottom <= vm.below.threshold && vm.belowState !== 'loading') {
        vm.preventBounce(e)
        vm.scrollLoad()
      }
      this.$emit('scroll', { e, scrollTop, scrollHeight })
      if (vm.isTouchend) {
        vm.$emit('scrolling', { e, scrollTop, scrollHeight })
        vm.isScrolling = true
      }
      vm.preScrollY = scrollTop
    },
    stopAnimate () {
      let vm = this
      if (vm.animateIds.length) {
        vm.animateIds.map(v => {
          cancelAnimationFrame(v)
          this.cancelAnimationFrameStop = true
        })
        vm.animateIds = []
      }
    },
    /**
     *  向下拉
     * @param {*} curPoint 当前点
     * @param {*} e 事件源
     * 在组件中 vm.above.isBounce?vm.aboveWrapHeight:0;当above.isBounce=false时可以自定义刷新风格，也就是说above.isBounce=false会照常走回调函数isLock=false时是不会走回调的
     * 可下拉的条件下
     * 可以无限下拉时清除正在执行的动画重新设置下拉状态
     * 在状态为结束over或者为pullingDown的时候才可以执行下拉
     * 如果手指的位置超过配置的距离,则提前结束下拉,避免Webview嵌套导致touchend无法触发
     * diff 和上次比,移动的距离 (大于0向下,小于0向上)
     */
    pullingDownEvent (curPoint, e) {
      let vm = this
      if (vm.above.isLock) {
        // 锁定的情况下直接阻止默认行为并返回
        vm.startPoint = null
        vm.preventDefault(e)
        return
      }
      if (vm.os.ios) {
        vm.setOverflowScrolling('auto')
      }
      // 下拉就阻止默认的bounce行为
      vm.preventBounce(e)
      if (vm.inAngle(curPoint)) {
        vm.setAboveState('pullingDown')
        if (vm.aboveState !== 'loading' && vm.aboveState !== 'hovering') {
          if (vm.maxTouchmoveY > 0 && curPoint.y >= vm.maxTouchmoveY) {
            vm.touchendEvent()
            return
          }
          var diff = curPoint.y - vm.lastPoint.y
          if (!vm.aboveWrapHeight) vm.aboveWrapHeight = 0

          // 下拉
          if (diff > 0) {
            // 下拉距离  < 指定距离
            if (vm.aboveWrapHeight < vm.above.offset) {
              vm.above.inOffset()
              vm.aboveWrapHeight += diff * vm.above.inOffsetRate
              clearTimeout(vm.endAboveTimer)
              vm.endAboveTimer = null
            } else {
              vm.above.outOffset()
              vm.aboveWrapHeight += diff * vm.above.inOffsetRate
            }
          } else {
            vm.aboveWrapHeight += diff
            if (vm.aboveWrapHeight <= 0) vm.aboveWrapHeight = 0
          }
          requestAnimationFrame(() => {
            vm.aboveDom.style.height = vm.aboveWrapHeight + 'px'
          })
          var rate = vm.aboveWrapHeight / vm.above.offset // 下拉区域当前高度与指定距离的比值
          vm.above.pullingDown(vm.aboveWrapHeight, rate) // 下拉过程中的回调,一直在执行
        }
      }
    },
    // 阻止ios默认的bounce效果
    preventBounce (e) {
      this.preventDefault(e)
      this.setOverflowScrolling('auto')
    },
    setOverflowScrolling (type) {
      let vm = this
      if (type === 'auto') {
        vm.scrollDom.style.webkitOverflowScrolling = 'auto' // 取消列表回弹效果,避免与下面vm.aboveDom.style.height混合,而导致界面抖动闪屏
        vm.isSetScrollAuto = true // 标记设置了webkitOverflowScrolling为auto
      } else {
        vm.scrollDom.style.webkitOverflowScrolling = 'touch'
        vm.isSetScrollAuto = false
      }
    },
    scrollLoad () {
      this.belowState = 'loading'
      // 开始执行回调
      this.below.callback(this.loadedEnd)
    },
    loadedEnd (flag) {
      this.isBelowNoMore = !!flag
      this.belowState = 'over'
    },
    /**
     * vm.above.hoverHeight 设置的下拉回弹的悬停高度
     * vm.above.offset 下拉触发回单的高度
     * 理论上vm.above.offset>=vm.above.hoverHeight
     * 没有设置vm.above.hoverHeight的时候,hoverHeight = above.offset
     * resetAboveHeightToZero 触发的条件是下拉松手的时候或者自动触发下拉加载的时候回弹的时候或者达到offset阈值回弹的时候
     * aboveWrapHeight 为当前下拉的高度
     * 情况分析：
     *  下拉没超过h的时候直接回弹
     *  下拉超过h的时候判断是不是有回调
     */
    resetAboveHeightToZero () {
      let vm = this
      vm.raf(vm.aboveWrapHeight, 0, (value, flag) => {
        vm.isScrollTo = true
        if (flag) {
          // 结束
          vm.isScrollTo = false
        }
      })
    },
    // 鼠标或手指的离开事件
    /**
     * 松手的时候触发
     * @param {*} e
     */
    touchendEvent (e) {
      let vm = this
      vm.isTouchend = true // 标记执行touchend
      // 如果下拉区域高度已改变,则需重置回来
      if (vm.aboveState === 'pullingDown') {
        if (vm.aboveWrapHeight >= vm.above.offset) {
          // 符合触发刷新的条件
          vm.triggerAboveLoad()
        } else {
          // 不符合的话 则重置
          vm.resetAboveHeightToZero()
        }
        if (vm.isSetScrollAuto) {
          vm.setOverflowScrolling('touch')
        }
        vm.movetype = 0
      }

      if (vm.belowState === 'over' && vm.toBottom() === 0) {
        // 触发加载
        vm.scrollLoad()
      }
      if (vm.os.pc) {
        vm.scrollDom.removeEventListener('mousemove', vm.touchmoveEvent) // 移除pc端的move事件
        document.ondragstart = function () {
          return true // 解除PC端禁止拖拽图片
        }
      }
    },
    /* 触发下拉刷新 type 手动调用时是否有动画 */
    triggerAboveLoad (type) {
      let vm = this
      vm.type = type
      // skipAboveDelay=true时说明不是用户回调的above.pullingEnd 或者用户想直接回弹
      /**
       * 默认this.above.pullingEnd会直接返回true,用户下拉后就直接回弹至0
       * 如果用户定义了this.above.pullingEnd，this.skipAboveDelay=undefined或者用户手动返回true
       */
      this.hasAboveCallback = false // 取消标记
      // 执行下拉的回调

      this.skipAboveDelay = this.above.pullingEnd(this.endAboveScroll)
      if (!type) {
        this.showAboveIndicator() //  下拉刷新中...
      }
    },
    refreshAboveState () {
      this.isAboveNoMore = false
    },
    /* 结束下拉刷新 */
    /**
     *
     * @param {*} doneFlag 默认false下拉加载时没有更多数据 --no more--
     */
    endAboveScroll (doneFlag) {
      var vm = this
      vm.hasAboveCallback = true
      vm.isAboveNoMore = !!doneFlag
      vm.setAboveState('hovering')
      if (vm.isAboveNoMore) {
        vm.resetAboveHeightToZero()
        return
      }
      if (vm.aboveState === 'pullingDown') {
        return
      }
      // 结束下拉刷新的方法
      var endScroll = function () {
        // 如果结束了下拉（在isEndless的情况下可能还在连续的下拉）
        if (vm.aboveState === 'hovering') {
          vm.resetAboveHeightToZero()
          vm.isBelowNoMore = false
        }
      }

      // 结束下拉刷新时的回调
      let delay = vm.above.hoverDelay

      if (vm.aboveState !== 'pullingDown') {
        vm.setAboveState('hovering')
      }
      if (typeof delay === 'number' && delay > 0) {
        vm.endAboveTimer = setTimeout(endScroll, delay)
      } else {
        endScroll()
      }

      this.$nextTick(() => {
        // 下拉刷新后数据重置，内容的高度可能不够一屏，需要主动加载下一页
        // 先判断屏幕高度
        if (this.scrollContentDom.clientHeight <= this.clientHeight) {
          this.scrollLoad()
        }
      })
    },
    watchDom (dom) {
      let config = {
        attributes: true,
        childList: false,
        subtree: false,
        attributeFilter: ['style']
      }
      this.domObserver().observe(dom, config)
    },
    // 监听键盘弹起时dom 是否被MutationObserver
    domObserver () {
      let MutationObserver =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver
      let vm = this
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'attributes') {
            vm.clientHeight = vm.scrollDom.clientHeight
          }
        })
      })
      return observer
    },
    /**
     * 在没有更多的情况下触发上拉加载及动画
     */
    triggerBelowLoad () {
      if (this.isBelowNoMore) return
      this.scrollLoad()
    },
    /**
     * 显示下拉加载指示器
     * trigger 是否主动触发
     *
     */
    showAboveIndicator (trigger) {
      let vm = this
      if (vm.hasAboveCallback) {
        // 表示同步执行了pullingEnd
        return
      }
      let targetHeight = this.above.hoverHeight || this.above.offset
      if (vm.aboveState !== 'hovering') {
        vm.setAboveState('loading')
      }
      let finalHeight = this.skipAboveDelay ? 0 : targetHeight
      vm.isScrollTo = true
      if (this.skipAboveDelay) {
        this.raf(this.aboveWrapHeight, 0, (value, flag) => {
          this.aboveWrapHeight = value
        })
      } else {
        if (trigger) {
          this.raf(0, finalHeight, (value, flag) => {
            this.aboveWrapHeight = value
          })
        } else {
          this.raf(this.aboveWrapHeight, finalHeight, (value, flag) => {
            this.aboveWrapHeight = value
          })
        }
      }
    },
    /* 阻止浏览器默认滚动事件 */
    preventDefault (e) {
      // cancelable:是否可以被禁用; defaultPrevented:是否已经被禁用
      if (e && e.cancelable && !e.defaultPrevented) e.preventDefault()
    },
    /* 根据点击滑动事件获取第一个手指的坐标 */
    getPoint (e) {
      return {
        x: e.touches ? e.touches[0].pageX : e.clientX,
        y: e.touches ? e.touches[0].pageY : e.clientY,
        t: e.timeStamp ? e.timeStamp : 0
      }
    },
    /* body的高度 */
    getBodyHeight () {
      return (
        document.body.clientHeight || document.documentElement.clientHeight
      )
    },
    getScrollInfo () {
      return {
        scrollTop: this.scrollDom.scrollTop,
        scrollHeight: this.scrollDom.scrollHeight
      }
    },
    // 距离底部的距离
    toBottom () {
      let { scrollTop, scrollHeight } = this.getScrollInfo()
      return parseInt(scrollHeight - this.clientHeight - scrollTop)
    },
    // 下拉角度
    inAngle (curPoint) {
      let vm = this
      // 下拉的角度是否在配置的范围内
      var x = Math.abs(vm.lastPoint.x - curPoint.x)
      var y = Math.abs(vm.lastPoint.y - curPoint.y)
      var z = Math.sqrt(x * x + y * y)
      if (z !== 0) {
        var angle = (Math.asin(y / z) / Math.PI) * 180 // 两点之间的角度,区间 [0,90]
        if (angle < vm.above.minAngle) return false // 如果小于配置的角度,则不往下执行下拉刷新
      }
      return true
    },
    // 当前滚动组件的状态 下拉的过程 pullingDown  loading[loading] hovering over 上拉的过程pullingUp beLowLoading[loading] end
    setAboveState (type) {
      this.aboveState = type
    },
    setBelowState (state) {
      // 上拉的过程beLowLoading[loading] end
      this.belowState = state
    },
    setBounce (isBounce) {
      if (!this.os.ios) return
      if (isBounce === false) {
        // 禁止
        window.addEventListener('touchmove', this.bounceTouchmove, {
          passive: false
        })
      } else {
        // 允许
        window.removeEventListener('touchmove', this.bounceTouchmove)
      }
    },
    /**
     * 当前touch的元素及父元素是否要拦截touchmove事件
     * @param {*} e 事件源
     */
    bounceTouchmove (e) {
      var vm = this
      var el = e.target
      var isPrevent = true
      while (el !== document.body && el !== document) {
        // Ignore range input element
        if (el.nodeName === 'INPUT' && el.getAttribute('type') === 'range') {
          return
        }
        var cls = el.classList
        if (cls) {
          if (cls.contains('tulip-scroller') || cls.contains('scroll-touch')) {
            isPrevent = false // 如果是指定条件的元素,则无需拦截touchmove事件
            break
          } else if (
            cls.contains('scroll-touch-x') ||
            cls.contains('scroll-touch-y')
          ) {
            // 如果配置了水平或者垂直滑动
            var curX = e.touches ? e.touches[0].pageX : e.clientX // 当前第一个手指距离列表顶部的距离x
            var curY = e.touches ? e.touches[0].pageY : e.clientY // 当前第一个手指距离列表顶部的距离y

            if (!vm.preWinX) vm.preWinX = curX // 设置上次移动的距离x
            if (!vm.preWinY) vm.preWinY = curY // 设置上次移动的距离y

            // 计算两点之间的角度
            var x = Math.abs(vm.preWinX - curX)
            var y = Math.abs(vm.preWinY - curY)
            var z = Math.sqrt(x * x + y * y)

            vm.preWinX = curX // 记录本次curX的值
            vm.preWinY = curY // 记录本次curY的值

            if (z !== 0) {
              var angle = (Math.asin(y / z) / Math.PI) * 180 // 角度区间 [0,90]
              if (
                (angle <= 45 && cls.contains('scroll-touch-x')) ||
                (angle > 45 && cls.contains('scroll-touch-y'))
              ) {
                isPrevent = false // 水平滑动或者垂直滑动,不拦截touchmove事件
                break
              }
            }
          }
        }
        el = el.parentNode // 继续检查其父元素
      }

      // 拦截touchmove事件:是否可以被禁用&&是否已经被禁用
      if (
        isPrevent &&
        e.cancelable &&
        !e.defaultPrevented &&
        typeof e.preventDefault === 'function'
      ) {
        e.preventDefault()
      }
    },
    setScrollTop (y) {
      if (typeof y === 'number') {
        this.scrollDom.scrollTop = y
      }
    },
    /**
     *
     * @param {*} t 时间起点
     * @param {*} b 距离的起点
     * @param {*} c 运动的距离
     * @param {*} d 运动的时长
     * 分场景执行动画
     * 如果是主动触发直接从offset或hoverHeight运动到0
     * 如果是下拉松手从aboveWrapHeight到hoverHeight或offset
     * 根据场景计算后传递参数？
     *
     }
     */
    raf (from, to, cb) {
      let vm = this
      vm.isScrollTo = true
      vm.animate = Animation(
        {
          from,
          to,
          callback: function (value, flag) {
            cb && cb(value, flag)
            if (vm.animateIds.length) {
              vm.aboveDom.style.height = value + 'px'
              vm.aboveWrapHeight = value
            }
            if (flag) {
              if (to === 0) {
                vm.setAboveState('over')
              } else {
                vm.setAboveState('loading')
              }
              cancelAnimationFrame(vm.animate)
            }
          },
          duration: 200,
          easing: 'easeOut'
        }
      )
      vm.animateIds.push(vm.animate)
      return vm.animate
    }
  }
}
</script>

<style lang="less" scoped>
body {
  /* 禁用默认的下拉刷新和边界效果
     但是依然可以进行滑动导航 */
  overscroll-behavior-y: none;
}
body {
  overflow: hidden;
  overscroll-behavior-y: none;
}
input {
  -webkit-user-modify: read-write-plaintext-only;
}
.above-top {
  font-size: 0px;
  position: relative;
  z-index: 9;
}
/*启用硬件加速:使动画渲染流畅,解决部分手机闪白屏问题,在下拉刷新和上拉加载触发时启用,结束后移除,避免滥用导致其他兼容性问题*/
.tulip-scroller-hardware {
  -webkit-overflow-scrolling: auto;
  overscroll-behavior-y: none;
  will-change: height;
}
.tulip-scroller-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  touch-action: none;
  overflow: hidden;
  z-index: 0;
}
.tulip-scroller {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  font-size: 24px;
  z-index: 1;
  -webkit-overflow-scrolling: auto;
  overscroll-behavior-y: none;

  .tulip-scroller-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    position: relative;
    z-index: 2;
    .tulip-scroller-inner {
      flex: 1;
    }
  }
  .above-wrap {
    position: relative;
    width: 100%;
    height: 0;
    text-align: center;
    transform: translateZ(0);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    perspective: 1000;
    .above-content {
      position: absolute;
      top: -50px;
      left: 0;
      bottom: -50px;
      padding-top: 50px;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
      .above-inner {
        display: flex;
        align-content: center;
        align-items: center;
        text-align: center;
        justify-content: center;
        height: 50px;
        margin: 0 auto;
        .success {
          display: none;
        }
      }
    }
  }

  .below-wrap {
    min-height: 40px;
    padding: 15px 0;
    text-align: center;
    flex: 0;
  }
}
</style>
