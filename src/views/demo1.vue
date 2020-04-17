<template>
  <div>
    <tulip-scroll >
     <van-nav-bar
      title="无参数示例"
      left-text="返回"
      left-arrow
      @click-left="$router.replace('/')"
    />
      <van-notice-bar wrapable :scrollable="false">
      默认无任何参数效果，全页面下拉，有类似iOS的Bounce效果
    </van-notice-bar>
    </tulip-scroll>
  </div>
</template>
