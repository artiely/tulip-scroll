---
title: 上拉配置说明
---

# belowOpt

上拉配置说明

## belowOpt.isLock

- 类型 `boolean`
- 默认 `false`

  是否禁止上拉加载

## belowOpt.threshold

- 类型 `number`
- 默认 `90`

  触发上拉加载的阈值

## belowOpt.callback

- 类型 `function`
- 参数 `done`

```js
callback: (done) => {
  this.page++
  // 模拟异步
  if (this.page <= this.totalPage) {
    setTimeout(() => {
      this.list += 10
      done()
    }, 300)
  } else {
    done(true)
  }
}
```
`done()`可以不传值或传递一个布尔值，当传递`done(true)`将触发`below`插槽的`isBelowNoMore`属性为`true`,意为没有更多数据，所以当没有更多数据时可以传递`done(true)`。
:::tip
`done()`函数必须回调
:::
触发上拉加载时的回调

## 使用示例

```vue
<template>
  <tulip-scroll :belowOpt="belowOpt" />
</template>
<script>
export default {
  data() {
    return {
      page: 1, // 当前页
      totalPage: 10, // 总页码
      list: 10, // 返回数据
      belowOpt: {
        callback: (done) => {
          this.page++
          // 模拟异步
          if (this.page <= this.totalPage) {
            setTimeout(() => {
              this.list += 10
              done()
            }, 300)
          } else {
            dnoe(true)
          }
        },
      },
    }
  },
}
</script>
```
