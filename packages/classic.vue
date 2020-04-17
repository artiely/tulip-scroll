<template>
  <div>
    <svg
      v-show="aboveState==='pullingDown'"
      :class="deg"
      t="1572399962873"
      class="icon def"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="7485"
      width="30"
      height="30"
    >
      <path
        d="M537.6 760.490667l175.7184-175.7184a25.6 25.6 0 1 1 36.181333 36.215466l-219.409066 219.409067a25.6 25.6 0 0 1-36.181334 0L274.432 620.987733a25.6 25.6 0 0 1 36.215467-36.181333l175.7184 175.684267V186.197333a25.6 25.6 0 1 1 51.2 0V760.490667z"
        fill="#777777"
        p-id="7486"
      />
    </svg>
    <div v-show="aboveState==='loading'||aboveState==='hovering'">
      <spinner ref="svg" />
    </div>
  </div>
</template>

<script>
import spinner from './spinner'
export default {
  components: {
    spinner
  },
  props: {
    y: Number,
    offset: Number,
    aboveState: {
      type: String
    }
  },
  computed: {
    deg () {
      if (this.aboveState !== 'pullingDown') {
        return ''
      } else {
        if (this.y > this.offset) {
          return 'deg'
        } else {
          return 'deg2'
        }
      }
    }
  }
}
</script>

<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
@keyframes rotate2 {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.deg {
  animation: rotate ;
  transform: rotate(180deg);
}
.deg2 {
  animation: rotate2 ;
  transform: rotate(0deg);
}
.def {
    transition: 0.3s
}
</style>
