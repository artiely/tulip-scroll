<template>
  <div>
    <van-nav-bar
      title="下拉刷新"
      left-text="返回"
      fixed
      left-arrow
      @click-left="$router.replace('/')"
    />
    <tulip-scroll
      :aboveOpt="aboveOpt"
      @init="init"
      style="top:45px"
    >
      <van-notice-bar
        wrapable
        :scrollable="false"
      >自定义bounce区域的内容,及区域的对齐方式（可分开设置）</van-notice-bar>
      <van-button
        block
        @click="trigger"
      >主动触发下拉无动画</van-button>
      <van-button
        block
        @click="trigger2"
      >主动触发下拉带动画</van-button>
      <van-button
        block
        @click="trigger3"
      >主动触发下拉无数据的情况</van-button>
      <van-button
        block
        @click="aboveOpt.isEndless=!aboveOpt.isEndless"
      >是否可以连续下拉{{aboveOpt.isEndless}}</van-button>
      <pre>{{
        }}</pre>
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scroll: null,
      finish: false,
      aboveOpt: {
        isLock: false,
        isBounce: true,
        isEndless: this.isEndless,
        style: 'solo',
        offset: 90,
        hoverHeight: 60,
        hoverDelay: 600,
        pullingEnd: done => {
          // 模拟异步
          this.page = 1
          if (!this.finish) {
            setTimeout(() => {
              this.$toast.success('刷新成功')
              // 必须执行回调函数done()
              done()
            }, 200)
          } else {
            // 没有更多时回调done(true)
            done(true)
          }
        }
      }
    }
  },
  methods: {
    init (scroll) {
      this.scroll = scroll
    },
    trigger () {
      this.finish = false
      this.scroll.triggerAboveLoad(true)
    },
    trigger2 () {
      this.finish = false
      this.scroll.triggerAboveLoad()
    },
    trigger3 () {
      this.finish = true
      this.scroll.triggerAboveLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.pdd {
  padding: 10px;
  font-size: 12px;
  color: #777;
}
</style>
