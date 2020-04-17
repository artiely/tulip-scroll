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
      <van-cell-group>
        <van-switch-cell
          v-model="aboveOpt.isBounce"
          title="开关上bounce"
        />
        <van-switch-cell
          v-model="aboveOpt.isEndless"
          title="加载中是否可以继续下拉"
        />
        <van-switch-cell
          v-model="aboveOpt.isLock"
          title="禁止下拉"
        />
        </van-cell-group>
        <pre>
          {{aboveOpt}}
        </pre>
        <p>关闭bounce动画同样会执行所有的回调函数</p>
        <p>isLock则不会</p>
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
        style: 'solo',
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
