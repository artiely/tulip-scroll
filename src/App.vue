<template>
  <div id="app">
    <keep-alive>
    <router-view /></keep-alive>
  </div>
</template>

<style lang="less">
*{
  padding: 0;margin: 0;
}
html,body,#app{
  background:#eee;
  height: 100%;
}
#app > div{
  height: 100%;
}
.tulip-scroller .tulip-scroller-content{
  background: #fff;
}
pre{
  font-size: 24px;;
}
</style>
