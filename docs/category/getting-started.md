---
title: 快速上手
---

## 快速上手

> 在开始之前，推荐先熟知Vue的基本使用，并正确安装和配置了 Node.js v8.9 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的基本知识，并且已经完全熟知了Vue 的使用以及正确开发方式。

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
```
