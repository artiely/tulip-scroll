/*
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间）。
 */
const Tween = {
  linear: function(t, b, c, d) {
    return (c * t) / d + b
  },
  easeIn: function(t, b, c, d) {
    return c * (t /= d) * t * t + b
  },
  easeOut: function(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b
  },
  easeInOut: function(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b
    return (c / 2) * ((t -= 2) * t * t + 2) + b
  },
}
// 对运动方法进行封装
/**
 *
 * @param {*} from 起始
 * @param {*} to 结束
 * @param {*} duration 时长
 * @param {*} easing 动画类型
 * @param {*} callback 回调
 */
function Animation({ from, to, duration, easing, callback }) {
  // requestAnimationFrame的兼容处理
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(fn) {
      return setTimeout(fn, 17)
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id)
    }
  }

  // 算法需要的几个变量
  var start = 0
  // during根据设置的总时间计算
  var during = Math.ceil(duration / 17)
  // 动画请求帧
  var req = null

  // 当前动画算法

  var arrKeyTween = easing
  var fnGetValue

  fnGetValue = Tween[arrKeyTween]

  // 运动
  var step = function() {
    // 当前的运动位置
    var value = fnGetValue(start, from, to - from, during)

    // 时间递增
    start++
    // 如果还没有运动到位，继续
    if (start <= during) {
      let cbres = callback(value)
      if (!cbres) {
        req = requestAnimationFrame(step)
      } else {
        // 动画结束，这里可以插入回调...
        callback(to, true)
        cancelAnimationFrame(req)
      }
    } else {
      // 动画结束，这里可以插入回调...
      callback(to, true)
      cancelAnimationFrame(req)
    }
  }
  // 开始执行动画
  step()
  return req
}

export default Animation
