<template>
  <div ref="scroll" class="tulip-scroller" >
    <!-- <div style="height:100px;background:#ddd;position:relative;z-index:1"></div> -->
    <div
      style="background:red"
      ref="above"
      class="tulip-scroller-hardware"
    ></div>
    <span style="margin-right:10px">按下时的位置{{state}}</span>
    <div
      v-for="i in 100"
      :key="i"
    >{{i}}</div>
  </div>
</template>

<script>
import { ref, toRefs, reactive, watchEffect, watch, computed, onMounted, onUnmounted } from '@vue/composition-api'
import { useStartPosition } from './mouse'
import { useMovePosition } from './move'
import Animation from '../../packages/animate'
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
export default {
  setup (props, ctx) {
    console.log("setup -> ctx", ctx)

    // 获取其实位置
    const { x: sx, y: sy, t } = useStartPosition()
    // 获取移动的位置
    const { x: mx, y: my } = useMovePosition()
    let preY = ref(my)
    let aboveWapperHeight = 0
    const state = reactive({
      sx,
      sy,
      t,
      mx,
      my,
      aboveWapperHeight
    })

    
    onMounted(() => {
      const aboveDom = ctx.refs.above
      watch(preY, (val, ovl) => {
      let diff = val - (ovl ? ovl : val)
      if (state.aboveWapperHeight < 0) return
      if (state.aboveWapperHeight < aboveOpt.offset) {
        state.aboveWapperHeight += diff * aboveOpt.inOffsetRate
      } else {
        state.aboveWapperHeight += diff * aboveOpt.outOffsetRate
      }
      requestAnimationFrame(()=>{
         aboveDom.style.height = state.aboveWapperHeight + 'px'
      })
    })
      let scrollDom = ctx.refs.scroll
    scrollDom.style.webkitOverflowScrolling = 'auto'
      window.addEventListener('touchend', resetheight)
      
      scrollDom.addEventListener('touchmove', bounceTouchmove, {
        passive: false
      })
      scrollDom.addEventListener('touchstart', bounceTouchmove, {
        passive: false
      })
      function resetheight () {
      console.log('9999')
      let animate = Animation(
        {
          from: state.aboveWapperHeight,
          to: 0,
          callback: function (value, flag) {
            state.aboveWapperHeight = value
            preY.value = 0
            aboveDom.style.height = value + 'px'
            if (flag) {
              cancelAnimationFrame(animate)
            }
          },
          duration: 200,
          easing: 'easeOut'
        }
      )
    }
    })


    onUnmounted(() => {
      window.removeEventListener('touchend', resetheight)
    })



    function bounceTouchmove (e) {
      // alert(2)
      // e.preventDefault()
      // console.log("bounceTouchmove -> e", e)
      // var ctx = this

      var el = e.target
      var isPrevent = true
      while (el !== document.body && el !== document) {
        // console.log("bounceTouchmove -> el", el)
        // Ignore range input element
        // if (el.nodeName === 'INPUT' && el.getAttribute('type') === 'range') {
        //   return
        // }
        var cls = el.classList
        console.log("bounceTouchmove -> cls", cls)
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

            if (!ctx.preWinX) ctx.preWinX = curX // 设置上次移动的距离x
            if (!ctx.preWinY) ctx.preWinY = curY // 设置上次移动的距离y

            // 计算两点之间的角度
            var x = Math.abs(ctx.preWinX - curX)
            var y = Math.abs(ctx.preWinY - curY)
            var z = Math.sqrt(x * x + y * y)

            ctx.preWinX = curX // 记录本次curX的值
            ctx.preWinY = curY // 记录本次curY的值

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
        console.log("bounceTouchmove -> el", el)
      }

      // 拦截touchmove事件:是否可以被禁用&&是否已经被禁用
      if (
        isPrevent &&
        e.cancelable &&
        !e.defaultPrevented &&
        typeof e.preventDefault === 'function'
      ) {
        // alert(1)
        e.preventDefault()
      }
    }

    
    // 其他逻辑...
    return {
      state,
    }
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.tulip-scroller{
  position: relative;
  height:100vh;overflow-y:scroll;background:yellow
}
/*启用硬件加速:使动画渲染流畅,解决部分手机闪白屏问题,在下拉刷新和上拉加载触发时启用,结束后移除,避免滥用导致其他兼容性问题*/
.tulip-scroller-hardware {
  height: 0;
  position: relative;
  margin-top: -100px;
  padding-top: 100px;
  transform: translateZ(0);
  -webkit-overflow-scrolling: auto;
  overscroll-behavior-y: none;
  will-change: height;
}
</style>