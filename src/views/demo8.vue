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
      style="top:50px"
    >

      <van-divider>回弹到指定的高度刷新</van-divider>
      <van-cell-group>
        <van-field
          v-model.number="aboveOpt.offset"
          type="tel"
          required
          clearable
          label="刷新阈值"
          right-icon="question-o"
          placeholder="请输入"
          @click-right-icon="$toast('above.offset')"
        />
      </van-cell-group>
      <van-notice-bar wrapable :scrollable="false">
      不同的刷新阈值会让tulip-scroll下拉到不同的高度才触发刷新
    </van-notice-bar>
    <pre>{{aboveOpt}}</pre>
    </tulip-scroll>
  </div>
</template>

<script>
export default {

  data () {
    return {
      aboveOpt: {
        style: 'classic',
        offset: 90,
        pullingEnd: done => {
          // 模拟异步
          setTimeout(() => {
            // 必须执行回调函数done()
            this.$toast.success('刷新成功')
            done()
          }, 3000)
        }
      }
    }
  }
}
</script>
