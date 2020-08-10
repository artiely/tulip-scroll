# 介绍
tulip-scroll是一个用于vue项目的下拉刷新和上拉加载组件。

## Features
- 下拉刷新
- 上拉加载
- 开箱即用
- 原生滚动
- 滚动位置自动记录
- 主流APP案例, 丰富经典, 随心定制, 轻松拓展
- 自由灵活的api, 可让您快速自定义真正属于自己的下拉/上拉组件
- 完美支持android, iOS, 各手机浏览器, 兼容PC主流浏览器

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

