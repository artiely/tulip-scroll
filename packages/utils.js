/* 阻止浏览器默认滚动事件 */
export function preventDefault (e) {
  // cancelable:是否可以被禁用; defaultPrevented:是否已经被禁用
  if (e && e.cancelable && !e.defaultPrevented) e.preventDefault()
}

/* 根据点击滑动事件获取第一个手指的坐标 */
export function getPoint (e) {
  return {
    x: e.touches ? e.touches[0].pageX : e.clientX,
    y: e.touches ? e.touches[0].pageY : e.clientY,
    t: e.timeStamp ? e.timeStamp : 0
  }
}

/* body的高度 */
export function getBodyHeight () {
  return document.body.clientHeight || document.documentElement.clientHeight
}
/* 视口的高度 */
export function getViewportHeight () {
  return window.innerHeight || document.documentElement.clientHeight
}
