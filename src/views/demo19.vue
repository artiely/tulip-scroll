<template>
  <div>
    <tulip-scroll :aboveOpt="aboveOpt">
      <van-nav-bar
        title="基础方法设置"
        left-text="返回"
        left-arrow
        @click-left="$router.replace('/')"
      />
      <van-notice-bar
        wrapable
        :scrollable="false"
      >自定义bounce区域的内容,及区域的对齐方式（可分开设置）</van-notice-bar>
      <van-radio-group v-model="aboveOpt.align">
        <van-cell-group>
          <van-cell
            title="上"
            clickable
            @click="aboveOpt.align = 'flex-start'"
          >
            <van-radio
              slot="right-icon"
              name="flex-start"
            />
          </van-cell>
          <van-cell
            title="中"
            clickable
            @click="aboveOpt.align = 'center'"
          >
            <van-radio
              slot="right-icon"
              name="center"
            />
          </van-cell>
          <van-cell
            title="下"
            clickable
            @click="aboveOpt.align = 'flex-end'"
          >
            <van-radio
              slot="right-icon"
              name="flex-end"
            />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </tulip-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aboveOpt: {
        align: 'center',
        style: 'classic',
        pullingEnd: done => {
          setTimeout(() => {
            done()
          }, 1000)
        }
      }
    }
  }
}
</script>
