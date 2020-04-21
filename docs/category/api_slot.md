---
title: 插槽配置
---
# 插槽配置

## aboveTop

指示器上方的区域插槽，具体使用示例查看模仿支付宝刷新

## aboveWrap
- 参数 `{aboveWrapHeight}`
- `aboveWrapHeight` 刷新容器的实时高度

整个下拉刷新区域的插槽，用于高度自定义

## above
- 参数 `{aboveWrapHeight,aboveState,isAboveNoMore}`
- `aboveWrapHeight` 刷新容器的实时高度
- `aboveState` 当前指示器的状态 ['pullingDown','loading','hovering','over']分别是下拉，加载中，悬停中，结束
- `isAboveNoMore` 没有更多

下拉指示器的插槽，用于自定义指示器

## below
参数 `{belowState,isBelowNoMore}`
- `belowState` 当前指示器的状态 ['loading','over']分别是加载中，结束
- `isBelowNoMore` 没有更多

上拉加载指示器的插槽，用于自定义指示器
