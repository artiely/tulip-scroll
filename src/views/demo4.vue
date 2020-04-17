<template>
  <div>
    <van-nav-bar fixed title="基础方法设置" left-text="返回" style="z-index: 1" left-arrow @click-left="$router.replace('/')" />
    <tulip-scroll :aboveOpt="aboveOpt" :belowOpt="belowOpt" @init="init" :wrapStyle="{paddingTop:'45px'}">
      <van-button size="large" plain  @click="refresh">主动触发下拉刷新动画</van-button>
      <van-button size="large" plain  @click="refresh2">主动触发下拉刷新回调但不执行动画</van-button>
      <van-button size="large" plain  @click="load">主动触发上拉加载动画</van-button>
      <van-cell-group>
        <van-cell  v-for="i in list" :key="i" :title="i" clickable >
          </van-cell>
      </van-cell-group>
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scroll: null,
      list: 10,
      page: 1,
      totalpage: 3,
      aboveOpt: {
        style: 'solo',
        pullingEnd: done => {
          this.page = 1
          // 模拟异步
          setTimeout(() => {
            this.list = 9
            done()
          }, 1000)
        }
      },
      belowOpt: {
        style: 'solo',
        callback: done => {
          this.page++
          if (this.page <= this.totalpage) {
            setTimeout(() => {
              this.list += 10
              if (this.page < this.totalpage) {
                done()
              } else {
                done(true)
              }
            }, 2000)
          }
        }
      }
    }
  },
  methods: {
    refresh () {
      this.scroll.triggerAboveLoad()
    },
    refresh2 () {
      this.scroll.triggerAboveLoad(true)
    },
    load () {
      this.scroll.triggerBelowLoad()
    },
    init (scroll) {
      this.scroll = scroll
    }
  }
}
</script>

<style lang="less" scoped>
.time {
  transition: 0.3s;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.deg {
  animation: rotate 1s linear infinite;
}
</style>
