<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  user-select: none;
}
html,
body,
#app {
  background: #eee;
  height: 100%;
  max-width: 420px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}
// reset scrollbar
::-webkit-scrollbar {
  width: 6px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  background: transparent;
}
::-webkit-scrollbar-track {
  background: transparent;
}
#app > div {
  height: 100%;
}
.tulip-scroller .tulip-scroller-content {
  background: #fff;
}
pre {
  font-size: 24px;
}
</style>
