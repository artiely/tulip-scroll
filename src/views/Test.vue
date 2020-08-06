<template>
  <div>
    <span style="margin-right:10px">按下时的位置{{state}}</span>
  </div>
</template>

<script>
import { ref, toRefs, reactive, watchEffect, watch } from '@vue/composition-api'
import { useStartPosition } from './mouse'
import { useMovePosition } from './move'
export default {
  setup (props, context) {
    // 获取其实位置
    const { x: sx, y: sy, t } = useStartPosition()
    // 获取移动的位置
    const { x: mx, y: my } = useMovePosition()
    const state = reactive({
      sx, sy, t, mx, my
    })

    watch(state, () => {
      // console.log("setup -> state", JSON.stringify(state))
      if (state.sy < state.my) {
        console.log('ww')
      }
    })

    // 其他逻辑...
    return {
      state,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>