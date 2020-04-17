<template>
  <div class="demo">

    <van-nav-bar
      fixed
      title="基础属性设置"
      left-text="返回"
      left-arrow
      @click-left="$router.replace('/')"
      style="opacity:0.8"
    />
    <tulip-scroll
      :aboveOpt="aboveOpt"
      style="top:50px"
    >
      <van-divider>指示器的样式选择</van-divider>
      <van-radio-group v-model="style">
        <van-cell-group>
          <van-cell
            title="默认"
            clickable
            @click="style = 'default'"
          >
            <van-radio
              slot="right-icon"
              name="default"
            />
          </van-cell>
          <van-cell
            title="简单"
            clickable
            @click="style = 'solo'"
          >
            <van-radio
              slot="right-icon"
              name="solo"
            />
          </van-cell>
          <van-cell
            title="经典"
            clickable
            @click="style = 'classic'"
          >
            <van-radio
              slot="right-icon"
              name="classic"
            />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <pre>
        {{aboveOpt}}
      </pre>
    </tulip-scroll>
  </div>
</template>

<script>
export default {

  data () {
    return {
      style: 'solo'
    }
  },
  computed: {
    aboveOpt () {
      return {
        style: this.style,
        pullingEnd: done => {
          // 模拟异步
          setTimeout(() => {
            // 必须执行回调函数done()
            this.$toast.success('刷新成功')
            done()
          }, 1000)
        }
      }
    }
  }
}
</script>
