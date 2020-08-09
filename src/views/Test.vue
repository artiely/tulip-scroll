<template>
  <div>
    <div
      style="background:red"
      :style="{height:state.aboveWapperHeight+'px'}"
    ></div>
    <span style="margin-right:10px">按下时的位置{{state}}</span>
  </div>
</template>

<script>
import { ref, toRefs, reactive, watchEffect, watch, computed } from '@vue/composition-api'
import { useStartPosition } from './mouse'
import { useMovePosition } from './move'
import Animation from '../../packages/animate'
const aboveOpt = {
  isBounce: true,
  style: 'none',
  easeTime: 300,
  top: 0,
  align: 'flex-end', // start center end 刷新指示器的位置
  isLock: false, // 是否禁止下拉
  isEndless: false, // 是否可不停的下拉(开启后在加载的过程中可以继续下拉并会执行多次回调)
  offset: 90, // 下拉的阈值[50,100]
  hoverHeight: 0, // 下拉结束后的悬停高度[0,100]
  hoverDelay: 0, // 下拉后的悬停时间[0,2000]
  inOffsetRate: 0.6, // 阈值内的下拉难度系数[0.2,0.8]
  outOffsetRate: 0.3, // 阈值外的下拉难度系数 [0.2,0.8]
  minAngle: 45, // 下拉的角度阈值 [30,60]
  bottomOffset: 0, // 结束的阈值 [0,100]
  pullingDown: pullingY => { }, // 下拉过程中一直回调
  inOffset: type => { }, // 进入下拉阈值那一刻
  outOffset: (type, done) => {
    // done()
  }, // 超出下拉阈值那一刻（一般用于刷新回调）
  pullingEnd: done => {
    done()
    return true // 系统默认return true 这样在就知道在默认情况下怎么处理松手的后续操作
  } // 下拉结束那一刻（包含松开手指和自动结束）
}
export default {
  setup (props, context) {
    // 获取其实位置
    const { x: sx, y: sy, t } = useStartPosition()
    // 获取移动的位置
    const { x: mx, y: my } = useMovePosition()
    let preY = ref(my)
    let aboveWapperHeight = 0
    const state = reactive({
      sx,
      sy,
      t,
      mx,
      my,
      aboveWapperHeight
    })

    watch(state, (val, ovl) => {
      // console.log("setup -> val,ovl", val.my,ovl,preY.value)
      // console.log("setup -> state", JSON.stringify(state))
      // let diff = val.my-ovl.my
      // console.log("setup -> diff", diff)
      // if (state.sy < state.my) {
      //   // console.log('ww')
      // }
    })

    watch(preY, (val, ovl) => {
      let diff = val - (ovl ? ovl : val)
      if(state.aboveWapperHeight<0)return
      if (state.aboveWapperHeight < aboveOpt.offset) {
        state.aboveWapperHeight += diff * aboveOpt.inOffsetRate
      } else {
        state.aboveWapperHeight += diff * aboveOpt.outOffsetRate
      }
    })

    window.addEventListener('touchend', resetheight)

    function resetheight () {
      console.log('9999')
      let animate = Animation(
        {
          from: state.aboveWapperHeight,
          to: 0,
          callback: function (value, flag) {
            state.aboveWapperHeight = value
            preY.value = 0
            if (flag) {
              cancelAnimationFrame(animate)
            }
          },
          duration: 200,
          easing: 'easeOut'
        }
      )
    }
    // 其他逻辑...
    return {
      state,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>