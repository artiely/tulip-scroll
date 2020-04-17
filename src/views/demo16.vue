<template>
  <div>
    <van-nav-bar
      title="滚动加载"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.replace('/')"
    />
    <tulip-scroll :aboveOpt="aboveOpt" :belowOpt="belowOpt"  style="top:45px;text-align:center">
      <van-notice-bar wrapable :scrollable="false">下拉刷新 与滚动加载是我们最常见的场景</van-notice-bar>
      <div v-for="i in list" :key="i">{{i}}</div>
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: 22,
      page: 1,
      totalPage: 4,
      // 下拉刷新的参数
      aboveOpt: {
        isBounce: true,
        isEndless: false,
        isLock: false,
        align: 'flex-end',
        style: 'solo',
        offset: 90,
        hoverHeight: 60,
        hoverDelay: 600,
        pullingEnd: done => {
          this.page = 1
          // 模拟异步
          setTimeout(() => {
            this.list = 10
            this.$toast.success('刷新成功')
            // 必须执行回调函数done()
            done(false)
          }, 2000)
        }
      },
      // 滚动加载的参数
      belowOpt: {
        isLock: false,
        isBounce: false,
        style: 'solo',
        threshold: 50, // 阈值
        callback: (done) => {
          this.page++
          if (this.page > this.totalPage) {
            done(true)
          } else {
            setTimeout(() => {
              this.list += 10
              // 必须执行回调函数done()
              done()
            }, 100)
          }
        }
      }
    }
  },
  watch: {
    align (val) {
      this.aboveOpt.align = val
      this.belowOpt.align = val
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.pdd {
  padding: 10px;
  font-size: 12px;
  color: #777;
}
</style>
