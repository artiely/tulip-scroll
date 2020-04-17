<template>
  <div>
    <tulip-scroll
      :aboveOpt="aboveOpt"
      :belowOpt="belowOpt"
      @init="init"
      @scrolling="onscrolling"
      @scroll="onscroll"
      @pullingEnd="pullingEnd"
      @pulling="pulling"
    >
      <div
        slot="appBar"
        style="height:100px;background:red;position:fixed;top:0;width:100%;transform: translateZ(0);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  perspective: 1000;z-index:9"
        ref="search"
      >这里是搜索框</div>高级用法之
      <br />模仿网易音乐云村之随着滑动隐藏展开搜索框
      <br />
      <button @click="add">添加内容</button>
      <button @click="cut">减少内容</button>
      <div v-for="i in list" :key="i">{{i}}</div>
      <div slot="bounce">tulip-scroll</div>
    </tulip-scroll>
    <div style="position:fixed;bottom:50px;">{{count}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scroll: null,
      list: 30,
      scrollY: 0,
      diff: 0,
      count: 0,
      moveY: 0,
      toBottom: 0,
      page: 1,
      aboveOpt: {
        align: 'flex-end',
        style: 'default',
        offset: 60,
        isBounce: false,
        hoverDelay: 1000,
        inOffsetRate: 0.6,
        outOffsetRate: 0.4,
        pullingEnd: done => {
          setTimeout(() => {
            this.list = 10
            done()
          }, 1000)
        },
        pullingDown: pullingY => {
        }, // 下拉过程中一直回调
        inOffset: type => {
        }, // 进入下拉阈值那一刻
        outOffset: (type) => {
          // done()
        } // 超出下拉阈值那一刻（一般用于刷新回调）
      },
      belowOpt: {
        isBounce: true,
        style: 'default',
        pullingEnd: done => {
          this.page++
          setTimeout(() => {
            if (this.page < 3) {
              this.list += 16
              done()
            } else {
              done(true)
            }
          }, 500)
        }
      }
    }
  },
  methods: {
    onscroll (scrollY, toBottom) {
      this.scrollY = scrollY
      this.toBottom = toBottom || 0
    },
    onscrolling () {
      this.count++
    },
    // onscrolling:_.throttle(function(e){
    //   this.count++
    //     if(this.scrollY>=50&&this.toBottom>0){
    //     let vm=this
    //     let t = e.target.scrollTop;
    //     if (t >= vm.t) {
    //       //向下
    //       this.$refs.search.style.transform = `translateY(-50px)`;
    //       vm.scroll.scrollDom.style.paddingTop = "0px";
    //     } else {
    //       this.$refs.search.style.transform = `translateY(0)`;
    //       vm.scroll.scrollDom.style.paddingTop = "50px";
    //     }
    //     vm.t = e.target.scrollTop;}

    //   }, 1000/60,{leading:true,trailing:false}),

    init (vm) {
      this.scroll = vm
      // this.scroll.scrollDom.style.paddingTop = "50px";
    },
    add () {
      this.list += 10
    },
    cut () {
      this.list -= 10
    },
    pullingEnd (done) {
      // if(this.scrollY>50){
      //   if (this.diff < 0) {
      //   // this.$refs.search.style.top = "-50px";
      //   this.$refs.search.style.transform = `translateY(-50px)`;
      //   this.scroll.scrollDom.style.paddingTop = "0px";
      // } else {
      //   // 向下
      //   // this.$refs.search.style.top = "0px";
      //   this.$refs.search.style.transform = `translateY(0)`;
      //   this.scroll.scrollDom.style.paddingTop = "50px";
      // }
      // }else{
      //     // this.$refs.search.style.top = "0px";
      //     this.$refs.search.style.transform = `translateY(0)`;
      //   this.scroll.scrollDom.style.paddingTop = "50px";
      // }
      // this.$refs.search.style.transition = "transform 0.2s ease-in";
      // this.scroll.scrollDom.style.transition = "paddingTop 0.3s ease-in";
    },
    pulling ({ moveY, scrollY, diff, pullingCount }) {
      // this.diff = diff;
      // this.scrollY=
    }
  }
}
</script>
