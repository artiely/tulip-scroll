import {
  reactive,
  onMounted,
  onUnmounted,
  toRefs,
} from '@vue/composition-api'

export function useMovePosition() {
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
    window.addEventListener('touchmove', update, {
      passive: false,
    })
  })

  onUnmounted(() => {
    window.removeEventListener('touchmove', update)
  })

  return toRefs(pos)
}
