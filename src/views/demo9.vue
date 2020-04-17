<template>
  <div>
    <van-nav-bar fixed title="高级用法" left-text="返回" style="z-index: 1" left-arrow @click-left="$router.replace('/')" />
    <tulip-scroll style="top:45px;" :aboveOpt="aboveOpt" >
      <template v-slot:above>
        <div class="abovewarp-progress abovewarp-loading" style="height:50px;display:inline-block;margin:0 auto;" ref="meituan"></div>
      </template>
      <van-divider>模仿旧版美团</van-divider>
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aboveOpt: {
        align: 'flex-end',
        style: 'default',
        hoverHeight: 60,
        isEndless: true,
        offset: 50,
        hoverDelay: 300,
        pullingEnd: done => {
          setTimeout(() => {
            done()
          }, 2000)
        },
        inOffset: () => {
          this.$refs.meituan.style.height = '40px'
          this.$refs.meituan.classList.remove('abovewarp-loading')
          this.$refs.meituan.classList.add('abovewarp-progress')
        },
        outOffset: () => {
          this.$refs.meituan.style.height = '50px'
          this.$refs.meituan.classList.remove('abovewarp-progress')
          this.$refs.meituan.classList.add('abovewarp-loading')
        }
      }
    }
  }
}
</script>

<style lang="less" >
/*下拉刷新--向下进度动画*/
.abovewarp-progress {
  display: inline-block;
  width: 50px;
  margin: auto;
  border: none;
  border-radius: 0;
  background-size: 100% 100%;
  background-image: url(./9/progress0.png);
}

/*下拉刷新--进度条*/
.abovewarp-loading {
  display: inline-block;
  width: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: animProgress 0.3s steps(1, end),
    animLoading 0.3s steps(1, end) 0.3s infinite;
}

@keyframes animProgress {
  0% {
    background-image: url(./9/progress0.png);
  }
  16% {
    background-image: url(./9/progress1.png);
  }
  32% {
    background-image: url(./9/progress2.png);
  }
  48% {
    background-image: url(./9/progress3.png);
  }
  64% {
    background-image: url(./9/progress4.png);
  }
  80% {
    background-image: url(./9/progress5.png);
  }
  100% {
    background-image: url(./9/progress5.png);
  }
}

@keyframes animLoading {
  0% {
    background-image: url(./9/loading1.png);
  }
  16% {
    background-image: url(./9/loading2.png);
  }
  32% {
    background-image: url(./9/loading3.png);
  }
  48% {
    background-image: url(./9/loading4.png);
  }
  64% {
    background-image: url(./9/loading5.png);
  }
  80% {
    background-image: url(./9/loading6.png);
  }
  100% {
    background-image: url(./9/loading1.png);
  }
}
</style>
