<template>
  <div>
    <tulip-scroll :aboveOpt="{align:align}" :belowOpt="{align:align}">
      <van-nav-bar
      title="自定义Bounce内容"
      left-text="返回"
      left-arrow
      @click-left="$router.replace('/')"
    />
      <div slot="above" class="pdd">本组件有 Artiely 提供技术支持</div>
      <van-notice-bar wrapable :scrollable="false">自定义bounce区域的内容,及区域的对齐方式（可分开设置）</van-notice-bar>
      <van-radio-group v-model="align">
        <van-cell-group>
          <van-cell title="上" clickable @click="align = 'flex-start'">
            <van-radio slot="right-icon" name="flex-start" />
          </van-cell>
          <van-cell title="中" clickable @click="align = 'center'">
            <van-radio slot="right-icon" name="center" />
          </van-cell>
          <van-cell title="下" clickable @click="align = 'flex-end'">
            <van-radio slot="right-icon" name="flex-end" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      align: 'center'
    }
  }
}
</script>

<style lang="less" scoped>
.pdd {
  padding: 10px;
  font-size: 12px;
  color: #777;
}
</style>
