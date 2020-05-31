<template>
  <div>
    <van-nav-bar
      fixed
      title="模拟网易云村刷新"
      left-text="返回"
      left-arrow
      @click-left="$router.replace('/')"
      style="opacity:0.8"
    />
    <tulip-scroll
      :aboveOpt="aboveOpt"
      @scroll="scroll"
      style="top:45px"
    >

      <div
        slot="aboveTop"
        style="height:45px;font-size:14px;background:#ddd"
      >
        <div
          class="shearch-box"
          :class="className"
        >
          我是模拟的搜索框
        </div>
      </div>
      <ul>
        <li
          v-for="i in 100"
          :key="i"
        >{{i}}</li>
      </ul>
    </tulip-scroll>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pullingY: 0,
      className: '',
      scrollTop: 0,
      aboveOpt: {
        align: 'flex-end',
        style: 'solo',
        offset: 60,
        hoverDelay: 1000,
        pullingEnd: done => {
          setTimeout(() => {
            done()
          }, 600)
        },
        pullingDown: pullingY => {
          this.pullingY = pullingY
        },
        inOffset: () => { },
        outOffset: () => { }
      }
    }
  },
  methods: {
    scroll ({ scrollTop, scrollHeight }) {
      if (scrollTop > 0 && scrollTop > this.scrollTop && scrollTop < scrollHeight) {
        this.className = 'hide'
      } else {
        this.className = ''
      }
      this.scrollTop = scrollTop
    }
  }
}
</script>
<style scoped lang="less">
.shearch-box {
  position: fixed;
  top: 45px;
  height: 45px;
  width: 100%;
  background: red;
  z-index: 1;
  transition: 0.3s;
  text-align: center;
  font-size: 16px;
  line-height: 45px;
  &.hide {
    top: 0;
  }
}
</style>
