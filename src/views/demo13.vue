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
      高级用法之
      <br />内置指示器样式
      <br />
      {{aboveOpt.isEndless}}
      <button @click="endless">是否可无限下拉</button>
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
      svg: null,
      aboveOpt: {
        align: 'flex-end',
        style: 'classic',
        offset: 60,
        isBounce: false,
        isEndless: false,
        hoverDelay: 1000,
        inOffsetRate: 0.6,
        outOffsetRate: 0.4,
        pullingEnd: done => {
          this.page = 1
          setTimeout(() => {
            this.list = 10
            done()
          }, 1000)
        },
        pullingDown: pullingY => {}, // 下拉过程中一直回调
        inOffset: type => {
          this.svg.pauseAnimations()
        }, // 进入下拉阈值那一刻
        outOffset: type => {
          this.svg.unpauseAnimations()
          // done()
        } // 超出下拉阈值那一刻（一般用于刷新回调）
      },
      belowOpt: {
        isBounce: true,
        style: 'solo',
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
  mounted () {
    this.svg = document.getElementsByTagName('svg')[0]
  },
  methods: {
    endless () {
      this.aboveOpt.isEndless = !this.aboveOpt.isEndless
    },
    onscroll (scrollY, toBottom) {
      this.scrollY = scrollY
      this.toBottom = toBottom || 0
    },
    onscrolling () {
      this.count++
    },

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
    },
    pulling ({ moveY, scrollY, diff, pullingCount }) {
      // this.diff = diff;
      // this.scrollY=
    }
  }
}
</script>
