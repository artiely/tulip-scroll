<template>
  <div>
    <van-nav-bar fixed title="基础方法设置" left-text="返回" style="z-index: 1" left-arrow @click-left="$router.replace('/')" />
    <tulip-scroll
      :aboveOpt="aboveOpt"
      @init="init"
      :wrapStyle="{paddingTop:'45px'}"
    >
      <van-divider>回弹到指定位置刷新</van-divider>
      <van-button @click="hoverHeight=50">回弹到50</van-button>
      <van-button @click="hoverHeight=70">回弹到70</van-button>
      <pre>{{aboveOpt}}</pre>
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hoverHeight: 50
    }
  },
  computed: {
    aboveOpt () {
      return {
        hoverHeight: this.hoverHeight || 50,
        offset: 90,
        style: 'default',
        pullingEnd: (done) => {
          setTimeout(() => {
            done()
          }, 2000)
        }
      }
    }
  },
  methods: {
    init (vm) {
      this.scroll = vm
    }
  }
}
</script>
<style>
.tulip-scroller-content{
  background: #fff;
}
</style>
