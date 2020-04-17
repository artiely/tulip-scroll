<template>
  <div>
    <van-nav-bar
      fixed
      title="模仿头条类"
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
      <template v-slot:above="{aboveWrapHeight,aboveState}">
        <svg
          v-show="aboveState==='pullingDown'"
          :class="aboveState !== 'pullingDown'?'':aboveWrapHeight>aboveOpt.offset?'deg':'deg2'"
          t="1572399962873"
          class="icon def"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7485"
          width="30"
          height="30"
        >
          <path
            d="M537.6 760.490667l175.7184-175.7184a25.6 25.6 0 1 1 36.181333 36.215466l-219.409066 219.409067a25.6 25.6 0 0 1-36.181334 0L274.432 620.987733a25.6 25.6 0 0 1 36.215467-36.181333l175.7184 175.684267V186.197333a25.6 25.6 0 1 1 51.2 0V760.490667z"
            fill="#777777"
            p-id="7486"
          />
        </svg>
        <div v-show="aboveState==='loading'">
          <spinner ref="svg" />
        </div>
        <div v-show="aboveState==='hovering'" class="hovering-tip over">
            10条数据已更新
        </div>
      </template>
      <img
        class="peace"
        src="./peace.jpg"
        alt=""
      >
    </tulip-scroll>
  </div>
</template>

<script>
import spinner from '../../packages/spinner'
export default {
  components: {
    spinner
  },
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
        style: 'classic',
        offset: 50,
        hoverDelay: 1000,
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
.peace{
  width: 100%;
}
.hovering-tip{
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  background: #abcdef;
  color: #fff;
  width: 50%;
  overflow: hidden;
}
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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
@keyframes rotate2 {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.deg {
  animation: rotate ;
  transform: rotate(180deg);
}
.deg2 {
  animation: rotate2 ;
  transform: rotate(0deg);
}
.def {
    transition: 0.3s;
    text-align: center;
    margin: 0 auto;

}
</style>
