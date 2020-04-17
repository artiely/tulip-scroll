<template>
  <div class="default">
    <template v-if="aboveState=='pullingDown'">
      <template v-if="y<offset">
        <slot name="inOffsetInner">下拉刷新</slot>
      </template>
      <template v-else>
        <slot name="outOffsetInner">松手加载</slot>
      </template>
    </template>
    <template v-if="aboveState=='loading'">
      <slot name="refershing">刷新中...</slot>
    </template>
    <template v-if="aboveState=='hovering'">
      <slot name="hovering">刷新成功</slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    y: Number,
    aboveState: String,
    offset: Number
  }
}
</script>

<style scoped>
.default {
  font-size: 14px;
  color: #777;
}
</style>
