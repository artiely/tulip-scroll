<template>
  <div class="demo">

    <van-nav-bar
      fixed
      title="基础属性设置"
      left-text="返回"
      left-arrow
      @click-left="$router.replace('/')"
      style="opacity:0.8"
    />
    <tulip-scroll
      :aboveOpt="aboveOpt"
      @init="init"
      style="top:50px"
    >
      <van-field
        v-model.number="aboveOpt.hoverDelay"
        required
        clearable
        type="tel"
        class="input"
        label="悬停时间"
        placeholder="请输入"
      />
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scroll: null,
      style: 'solo',
      aboveOpt: {
        isBounce: true,
        isEndless: false,
        isLock: false,
        align: 'flex-end',
        style: 'solo',
        offset: 90,
        inOffsetRate: 0.6,
        outOffsetRate: 0.3,
        hoverHeight: 60,
        hoverDelay: 1000,
        pullingEnd: done => {
          // 模拟异步
          setTimeout(() => {
            // 必须执行回调函数done()
            this.$toast.success('刷新成功')
            done()
          }, 300)
        }
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
