<template>
  <div>
    <van-nav-bar
      fixed
      title="模仿头条类刷新"
      left-text="返回"
      left-arrow
      @click-left="$router.replace('/')"
    />
    <tulip-scroll
      :aboveOpt="aboveOpt"
      style="top:45px"
      @init="init"
      @pulling="pulling"
      @scroll="scrollFN"
    >
     
      <RecycleScroller
        class="scroller"
        :prerender="10"
        :items="listArr"
        :item-size="100"
        key-field="id"
        :buffer="200"
      >
        <template #before>
      Hey! I'm a message displayed before the items!
    </template>
    <template v-slot="{ item }">
    <div class="user">
      {{ item }}
    </div>
  </template>
      </RecycleScroller>
      <div slot="below" style="height:0"></div>
    </tulip-scroll>
  </div>
</template>

<script>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import spinner from '../../packages/spinner'
import { RecycleScroller } from 'vue-virtual-scroller'
export default {
  components: {
    spinner,
    RecycleScroller
  },
  data () {
    return {
      items: [
        {
          id: 1,
          label: 'Title',
          size: 64,
        },
        {
          id: 2,
          label: 'Foo',
          size: 32,
        },
        {
          id: 3,
          label: 'Bar',
          size: 32,
        },
      ],
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
      },
      listArr:[]
    }
  },
  created(){
    for(let i = 0;i<100;i++){
        this.listArr.push({
          id: 3+i,
          label: 'Bar',
          size: 32+i,
        })
      }
  },
  methods: {
    init (vm) {
      this.scroll = vm
    },
    pulling ({ moveY }) {
      this.deg = `${-moveY * 2}deg`
    },
    scrollFN(){
      console.log('123')
    }
  }
}
</script>

<style lang="less" >
.tulip-scroller .below-wrap{
  display: none;
}
.tulip-scroller-content,.tulip-scroller-inner{
  height: 100%;
  // overflow: hidden;
}
.peace {
  width: 100%;
}
.scroller{
  height: 100%;
}
.user{
  height: 100px;
  background: #eee;
  margin: 10px;
}
.hovering-tip {
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  background: #abcdef;
  color: #fff;
  width: 30%;
  margin: 0 auto;
  overflow: hidden;
}
.over {
  animation: width 0.2s;
  width: 100%;
}
@keyframes width {
  0% {
    width: 30%;
  }
  100% {
    width: 100%;
  }
}
.pyq {
  width: 30px;
  position: fixed;
  left: 15px;
  top: 0px;
  transition: 0.3s;
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
  animation: rotate 0.9s linear infinite;
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
  animation: rotate;
  transform: rotate(180deg);
}
.deg2 {
  animation: rotate2;
  transform: rotate(0deg);
}
.def {
  transition: 0.3s;
  text-align: center;
  margin: 0 auto;
}
</style>
