<template>
  <div>
    <van-nav-bar
      title="下拉加载"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.replace('/')"
    />
    <tulip-scroll
      :aboveOpt="aboveOpt"
      style="top:45px"
    >
      <van-notice-bar
        wrapable
        :scrollable="false"
      >譬如查看历史聊天记录的场景下，就存在下拉加载</van-notice-bar>
      <div
        v-for="(i,eq) in list"
        :key="eq"
      >{{i}}</div>
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: new Array(10).fill(Math.random()),
      page: 1,
      totalPage: 4,
      // 下拉刷新的参数
      aboveOpt: {
        isBounce: true,
        isEndless: false,
        isLock: false,
        align: 'flex-end',
        style: 'solo',
        offset: 90,
        hoverHeight: 60,
        hoverDelay: 300,
        pullingEnd: done => {
          this.page++
          // 模拟异步
          if (this.page > this.totalPage) {
            done(true)
          } else {
            let arr = new Array(10).fill(Math.random())
            setTimeout(() => {
              done()
              this.list.unshift(...arr)
            }, 200)
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pdd {
  padding: 10px;
  font-size: 12px;
  color: #777;
}
</style>
