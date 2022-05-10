<template>
  <div class="gulu-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="gulu-sticky" :class="classes" :style="{left, width, top}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  onMounted,
  onBeforeUnmount,
  computed,
  ref,
} from "vue"

export default {
  name: "GuluSticky",
  props: {
    distance: {
      type: Number,
      default: 0
    },
    test: {
      type: Array,
    },
    sticky: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
    },
    left: {
      type: String,
    },
    width: {
      type: String,
    },
    top: {
      type: String,
    },
  },
  setup(props, context) {
    const wrapper = ref(null);
    const offsetTop = () => {
      let {top} = this.$refs.wrapper.getBoundingClientRect()
      return {top: top + window.scrollY}
    }

    const _windowScrollHandler = () => {
      let {top} = offsetTop()
      if (window.scrollY > top - this.distance) {
        let {height, left, width} = this.$refs.wrapper.getBoundingClientRect()
        props.height = height + 'px'
        props.left = left + 'px'
        props.width = width + 'px'
        props.top = this.distance + 'px'
        props.sticky = true
      } else {
        props.height = undefined
        props.left = undefined
        props.width = undefined
        props.top = undefined
        props.sticky = false
      }
    }

    const classes = computed(() => {
      return props.sticky
    })

    onMounted(() => {
      window.addEventListener('scroll', _windowScrollHandler)
    });
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', _windowScrollHandler)
    });

    return {
      classes,
      left: props.left,
      width: props.width,
      height: props.height,
      top: props.top,
      wrapper,
    }


  }
}
</script>

<style scoped lang="scss">
.gulu-sticky {
  &.sticky {
    position: fixed;
  }
}
</style>