# 介绍
tulip-scroll是一个用于vue项目的下拉刷新和上拉加载组件。原生滚动不依赖transform属性，复杂场景更方便。

## Features
- 下拉刷新
- 上拉加载
- 开箱即用
- 原生滚动
- 丰富的自定义场景
- 滚动位置自动记录

## 预览

![](https://gitee.com/artiely/Figure-bed/raw/master/image/20200416115532.png)

[https://artiely.gitee.io/scroll/#/](https://artiely.gitee.io/scroll/#/)

## 文档

[document](https://artiely.gitee.io/scroll-docs/)


## 安装
使用 yarn 安装 tulip-scroll 主题：
```sh
yarn add tulip-scroll
```
或者使用 npm 安装它：
```sh
npm i tulip-scroll
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 全局应用
mian.js
```js
import TulipScroll from 'tulip-scroll'
vue.use(TulipScroll)
```

```vue
<template>
  <div>
    <tulip-scroll >
    </tulip-scroll>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>

</style>

```
## 组件内使用
```vue
<template>
  <div>
    <tulip-scroll >
    </tulip-scroll>
  </div>
</template>

<script>
import TulipScroll from 'tulip-scroll'
export default {
  components:{
    TulipScroll
  }
}
</script>

<style lang="less" scoped>

</style>

```

