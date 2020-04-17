<template>
  <div>
    <tulip-scroll
      :aboveOpt="aboveOpt"
      @init="init"
    >
      <van-nav-bar
        title="无参数示例"
        left-text="返回"
        left-arrow
        @click-left="$router.replace('/')"
      />
      <template v-slot:above="{aboveWrapHeight,aboveState}">
        <div class="my-slot">
          <span v-if="aboveWrapHeight<60">下拉刷新</span>
          <span v-else-if="aboveWrapHeight<120"> <span v-if="aboveState=='loading'">加载中</span> <span v-else-if="aboveState=='hovering'">加载成功</span> <span v-else>继续下拉有惊喜</span></span>
          <span v-else>松手得惊喜</span>
        </div>
      </template>
      <van-divider>模仿JD首页</van-divider>
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pullingY: 0,
      scroll: null,
      aboveOpt: {
        align: 'flex-end',
        style: 'default',
        offset: 60,
        hoverDelay: 1000,
        pullingEnd: done => {
          setTimeout(() => {
            if (this.pullingY < 120 && this.pullingY > 60) {
              done()
            } else if (this.pullingY >= 120) {
              done()
              this.$router.push('/demo18')
            }
          }, 200)
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
    init (scroll) {
      this.scroll = scroll
    }
  }
}
</script>
<style>
.my-slot {
  font-size: 14px;
  padding: 10px;
  color: #555;
}
</style>
