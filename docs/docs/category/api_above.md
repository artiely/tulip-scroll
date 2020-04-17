---
title: 下拉配置说明
---

# aboveOpt

下拉配置说明

## aboveOpt.isLock

- 类型 `boolean`
- 默认值 `false`
  是否禁用下拉刷新

## aboveOpt.isBounce

- 类型 `boolean`
- 默认值 `true`
  是否开启回调效果

## aboveOpt.style

- 类型 `string`
- 可选择 `none`,`default`,`solo`,`classic`
- 默认值 `none`
  下拉指示器的风格

## aboveOpt.align

- 类型 `string`
- 可选择 `flex-start`,`center`,`flex-end`
- 默认值 `center`
  下拉指示器的对齐方式

## aboveOpt.isEndless

- 类型 `boolean`
- 默认值 `false`
  是否可不停的下拉(开启后在加载的过程中可以继续下拉并会执行多次回调)

## aboveOpt.offset

- 类型 `number`
- 可选择 [50,100]
- 默认值 `60`
  下拉的阈值，超出该阈值将触发`aboveOpt.outOffset`

## aboveOpt.hoverHeight

- 类型 `number`
- 可选择 [0,aboveOpt.offset]
- 默认值 `0`
  下拉结束后指示器的悬停高度，理论应该小于`aboveOpt.offset`的值

## aboveOpt.hoverDelay

- 类型 `number`
- 默认值 `0`
  下拉结束后指示器的悬停毫秒时长

## aboveOpt.inOffsetRate

- 类型 `number`
- 可选择 [0.2,0.8]
- 默认值 `0.6`
  阈值内的下拉难度系数,值越小下拉越难，一般不用修改

## aboveOpt.outOffsetRate

- 类型 `number`
- 可选择 [0.2,0.8]
- 默认值 `0.3`
  阈值外的下拉难度系数，理论上`aboveOpt.inOffsetRate`>`aboveOpt.outOffsetRate`，一般不用修改

## aboveOpt.minAngle

- 类型 `number`
- 可选择 [30,60]
- 默认值 `45`
  下拉的角度阈值，一般不用修改

## aboveOpt.bottomOffset

- 类型 `number`
- 可选择 [0,100]
- 默认值 `0`
  结束的阈值,指手指下拉到底部 0 的位置结束下拉，一般不用修改

## aboveOpt.pullingDown

- 类型 `function`
- 参数 `pullingY`

  下拉过程中一直回调该函数并传递当前的下拉高度`pullingY`

## aboveOpt.inOffset

- 类型 `function`

  阈值内一直回调该函数,相关使用示例查看模仿旧版美团

## aboveOpt.outOffset

- 类型 `function`

阈值外一直回调该函数,相关使用示例查看模仿旧版美团

## aboveOpt.pullingEnd

- 类型 `function`
- 参数 `done`

```js
pullingEnd: (done) => {
  this.page = 1
  setTimeout(() => {
    this.list = 10
    done()
  }, 200)
}
```
`done()`可以不传值或传递一个布尔值，当传递`done(true)`将触发`above`插槽的`isAboveNoMore`属性为`true`,意为没有更多数据，所以当没有更多数据时可以传递`done(true)`,在下拉刷新的场景使用不到，下拉加载的场景可能或用到。
::: tip
done() 必须回调done() ，并应该始终在异步中调用
:::
下拉结束，即下拉松手时回调该函数，一般用于下拉刷新的回调，用于请求新的数据

## 使用示例

```vue
<template>
  <tulip-scroll :aboveOpt="aboveOpt" />
</template>
<script>
export default {
  data() {
    return {
      page: 1, // 当前页
      totalPage: 10, // 总页码
      list: 10, // 返回数据
      aboveOpt: {
        align: 'flex-end',
        style: 'default',
        hoverHeight: 50,
        hoverDelay: 1000,
        pullingEnd: (done) => {
          this.page = 1
          setTimeout(() => {
            this.list = 10
            done()
          }, 200)
        },
      },
    }
  },
}
</script>
```
