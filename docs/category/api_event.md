---
title: 事件配置
---

## @init
- 参数 当前tulip-scroll的实例

tulip-scroll初始化后触发


## @pulling
- 参数 `{e,moveY} `
- `e` 事件源
- `moveY` 手指移动的距离

touchmove时触发，参数大于0为向下移动，反之向上

## @scroll
- 参数 `{e, scrollTop, scrollHeight}`
- `e` 事件源
- `scrollTop` 已滚动的高度
- `scrollHeight` 可滚动的高度

页面滚动时一直触发

## @scrolling
- 参数 `{e, scrollTop, scrollHeight}`
- `e` 事件源
- `scrollTop` 已滚动的高度
- `scrollHeight` 可滚动的高度

手指控制滚动时触发，手指离开页面停止触发

