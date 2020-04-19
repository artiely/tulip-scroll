<template>
  <tulip-scroll>
    <div class="home">
      <van-collapse v-model="activeNames">
        <van-collapse-item
          title="基础示例"
          name="1"
        >
          <van-cell-group :border="false">
            <van-cell
              title="无参数/demo1"
              is-link
              to="/demo1"
            />
            <van-cell
              title="指示器样式/demo7"
              is-link
              to="/demo7"
            />
            <van-cell
              title="指示器对齐方式/demo19"
              is-link
              to="/demo19"
            />
            <van-cell
              title="自定bounce/demo2"
              is-link
              to="/demo2"
            />
            <van-cell
              title="悬停时长/demo3"
              is-link
              to="/demo3"
            />
            <van-cell
              title="悬停高度/demo5"
              is-link
              to="/demo5"
            />
            <van-cell
              title="基础方法/demo4"
              is-link
              to="/demo4"
            />
            <van-cell
              title="禁止/demo6"
              is-link
              to="/demo6"
            />
            <van-cell
              title="刷新阈值/demo8"
              is-link
              to="/demo8"
            />
            <van-cell
              title="下拉刷新/demo15"
              is-link
              to="/demo15"
            />
            <van-cell
              title="滚动加载/下拉刷新/demo16"
              is-link
              to="/demo16"
            />
            <van-cell
              title="下拉加载/demo17"
              is-link
              to="/demo17"
            />
          </van-cell-group>
        </van-collapse-item>
        <van-collapse-item
          title="高级示例"
          name="2"
        >
          <van-cell-group :border="false">
            <van-cell
              title="模仿美团/demo9"
              is-link
              to="/demo9"
            />
            <van-cell
              title="模仿朋友圈刷新/demo21"
              is-link
              to="/demo21"
            />
            <van-cell
              title="模仿支付宝刷新/demo20"
              is-link
              to="/demo20"
            />
            <van-cell
              title="模仿JD首页/demo10"
              is-link
              to="/demo10"
            />
            <van-cell
              title="模仿网易音乐云村/demo11"
              is-link
              to="/demo11"
            />
            <van-cell
              title="模仿头条类/demo22"
              is-link
              to="/demo22"
            />
          </van-cell-group>
        </van-collapse-item>
      </van-collapse>
      <!-- 示例部分组件依赖于vantui 希望不会给你带来困扰 -->
    </div>
  </tulip-scroll>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
      activeNames: ['1', '2']
    }
  }
}
</script>
<style lang="less">
.home {
  text-align: left;
}
.link {
  display: block;
  height: 30px;
  line-height: 30px;
}
</style>
