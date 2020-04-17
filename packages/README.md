tulip-scrolll
一个集下拉刷新上拉加载等多种场景的页面滚动插件
安装

```
npm i tulip-scroll
```

```
import Vue from 'vue
import tulipScroll from 'tulip-scroll'
Vue.use(tulipScroll)
```

```
<tulip-scroll></tulip-scroll>
```

# api

## props

| 名称 | 说明               | 参数 | 默认值 | 备注 |
| ---- | ------------------ | ---- | ------ | ---- |
| above | 下拉刷新的参数对象 | {}   |
| below   | 上拉加载的参数对象 |      |

|

## event

| 名称   | 说明                   | 参数                              | 默认值 | 备注                                                         |
| ------ | ---------------------- | --------------------------------- | ------ | ------------------------------------------------------------ |
| scroll | 滚动事件页面滚动时触发 | (scrollTop,scrollHeight,toBottom) |        | 参数依次为滚动条到顶部高度，可滚动高度，距离底部的距离 |
|scrolling|轻抚滚动或者缓冲滚动时触发