<template>
  <div class="loading">
    <template>
      <spinner
        ref="svg"
        v-show="!textShow&&belowState !== 'over'"
        :style="{opacity:y/offset}"
      />
      <div v-show="textShow">{{noMoreText}}</div>
    </template>
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
    above: {
      type: Boolean,
      default: false
    },
    belowState: String,
    aboveState: {
      type: String
    },
    noMoreText: {
      type: String,
      default: '-- no more --'
    },
    textShow: Boolean
  },
  watch: {
    y (val) {
      if (this.above) {
        if (this.aboveState === 'pullingDown') {
          if (val < this.offset) {
            this.svg.pauseAnimations()
          } else {
            this.svg.unpauseAnimations()
          }
        } else {
          this.svg.unpauseAnimations()
        }
      } else {
        this.svg.unpauseAnimations()
      }
    }
  },
  computed: {
    show () {
      if (!this.above) {
        return true
      } else {
        if (this.belowState === 'loading') {
          return true
        } else {
          return false
        }
      }
    }
  },
  mounted () {
    this.svg = this.$refs.svg.$el
  }
}
</script>

<style scoped>
.loading {
  font-size: 12px;
  color: #777;
}
</style>
