<template>
  <div>
    <van-nav-bar
      fixed
      title="模仿朋友圈刷新"
      left-text="返回"
      left-arrow
      @click-left="$router.replace('/')"
    />
    <tulip-scroll
      :aboveOpt="aboveOpt"
      style="top:45px"
      @init="init"
      @pulling="pulling"
    >
      <img
        src="./pyq.svg"
        class="pyq"
        :class="showClass"
        :style="{transform:`rotate(${deg})`}"
      >
      <img
        src="./peace.jpg"
        style="width:100%;margin-top:-100px"
        alt=""
      >

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
      showClass: '',
      onoff: 1,
      scrollY: 0,
      deg: '0deg',
      aboveOpt: {
        align: 'flex-end',
        style: 'default',
        offset: 60,
        isEndless: true,
        outOffset: () => {
          this.showClass = 'show-class'
        },
        pullingEnd: (done) => {
          this.showClass = 'show-class deg'
          setTimeout(() => {
            this.showClass = ''
            done()
          }, 1000)
          return true
        }
      }

    }
  },
  methods: {
    init (vm) {
      this.scroll = vm
    },
    pulling ({ moveY }) {
      this.deg = `${-moveY * 2}deg`
    }
  }
}
</script>

<style lang="less" scoped>
.pyq {
  width: 30px;
  position: fixed;
  left: 15px;
  top: 0px;
  transition: .3s;
  opacity: 0;
  &.show-class {
    top: 100px;
    opacity: 1;
    transition: 0.1s;
  }
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
  animation: rotate .9s linear infinite;
}
</style>
