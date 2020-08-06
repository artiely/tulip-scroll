/**
 * 获取手指按下或者鼠标按下时的位置
 */
import {
  reactive,
  onMounted,
  onUnmounted,
  toRefs,
} from '@vue/composition-api'

export function useStartPosition() {
  const pos = reactive({
    x: 0,
    y: 0,
    t: 0,
  })

  function update(e) {
    pos.x = e.touches ? e.touches[0].pageX : e.clientX
    pos.y = e.touches ? e.touches[0].pageY : e.clientY
    pos.t = e.timeStamp ? e.timeStamp : 0
  }

  onMounted(() => {
    window.addEventListener('touchstart', update)
    window.addEventListener('mousedown', update)
  })

  onUnmounted(() => {
    window.removeEventListener('touchstart', update)
    window.removeEventListener('mousedown', update)
  })

  return toRefs(pos)
}
