
/*
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间）。
*/
const Tween = {
  linear: function (t, b, c, d) {
    return c * t / d + b
  },
  easeIn: function (t, b, c, d) {
    return c * (t /= d) * t * t + b
  },
  easeOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b
  },
  easeInOut: function (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b
    return c / 2 * ((t -= 2) * t * t + 2) + b
  }
}
// 对运动方法进行封装
function Animation (from, to, duration, easing, callback) {
  var isFunction = function (obj) {
    return typeof obj === 'function'
  }
  var isNumber = function (obj) {
    return typeof obj === 'number'
  }
  var isString = function (obj) {
    return typeof obj === 'string'
  }

  // 转换成毫秒
  var toMillisecond = function (obj) {
    if (isNumber(obj)) {
      return obj
    } else if (isString(obj)) {
      if (/\d+m?s$/.test(obj)) {
        if (/ms/.test(obj)) {
          return 1 * obj.replace('ms', '')
        }
        return 1000 * obj.replace('s', '')
      } else if (/^\d+$/.test(obj)) {
        return +obj
      }
    }
    return -1
  }

  if (!isNumber(from) || !isNumber(to)) {
    if (window.console) {
      console.error('from和to两个参数必须且为数值')
    }
    return 0
  }

  // duration, easing, callback均为可选参数
  // 而且顺序可以任意
  var options = {
    duration: 300,
    easing: 'linear',
    callback: function () {}
  }

  var setOptions = function (obj) {
    if (isFunction(obj)) {
      options.callback = obj
    } else if (toMillisecond(obj) !== -1) {
      options.duration = toMillisecond(obj)
    } else if (isString(obj)) {
      options.easing = obj
    }
  }
  setOptions(duration)
  setOptions(easing)
  setOptions(callback)

  // requestAnimationFrame的兼容处理
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (fn) {
      return setTimeout(fn, 17)
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }

  // 算法需要的几个变量
  var start = 0
  // during根据设置的总时间计算
  var during = Math.ceil(options.duration / 17)
  // 动画请求帧
  var req = null

  // 当前动画算法

  var arrKeyTween = options.easing
  var fnGetValue

  fnGetValue = Tween[arrKeyTween]
  if (isFunction(fnGetValue) === false) {
    console.error('没有找到名为"' + options.easing + '"的动画算法')
    return
  }

  // 运动
  var step = function () {
    // 当前的运动位置
    var value = fnGetValue(start, from, to - from, during)

    // 时间递增
    start++
    // 如果还没有运动到位，继续
    if (start <= during) {
      let cbres = options.callback(value)
      if (!cbres) {
        req = requestAnimationFrame(step)
      } else {
        // 动画结束，这里可以插入回调...
        options.callback(to, true)
        cancelAnimationFrame(req)
      }
    } else {
      // 动画结束，这里可以插入回调...
      options.callback(to, true)
      cancelAnimationFrame(req)
    }
  }
  // 开始执行动画
  step()
  return req
}

export default Animation
