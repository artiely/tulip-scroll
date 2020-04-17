<template>
  <div>
      <van-nav-bar  fixed title="模仿支付宝刷新" left-text="返回" left-arrow @click-left="$router.replace('/')" />
    <tulip-scroll  :aboveOpt="aboveOpt" style="top:45px" :belowOpt="belowOpt" @init="init" >
      <div slot="aboveTop">
        <img src="./8/zfb2.jpg" style="width:100%" alt="">
      </div>
      <img src="./8/zfb.jpg" alt="" style="width:100%">
      <div slot="below">
        <van-divider>我是有底线的</van-divider>
      </div>
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scroll: null,
      list: 10,
      height: false,
      onoff: 1,
      scrollY: 0,
      aboveOpt: {
        align: 'flex-end',
        style: 'default',
        offset: 60,
        isEndless: true,
        pullingEnd: (done) => {
          setTimeout(() => {
            done()
          }, 1000)
        }
      },
      belowOpt: {
        style: 'default',
        pullingEnd: (done) => {

        }
      }
    }
  },
  methods: {
    init (vm) {
      this.scroll = vm
      // this.scroll.scrollWrapperDom.style.paddingTop = '200px'
      // this.scroll.scrollDom.style.paddingTop = '354px'
    },
    add () {
      this.list += 10
    },
    cut () {
      this.list -= 10
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
