<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {onMounted} from "vue";

interface layoutClass {
  hasSider?: boolean;
}

export default {
  name: "GuluLayout",
  setup() {
    const layoutClass: layoutClass = {
      hasSider: false,
    }
    const onMounted = () => {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GuluSider') {
          this.layoutClass.hasSider = true
        }
      })
    }

    return {
      layoutClass, onMounted
    }
  },
}
</script>

<style scoped lang="scss">
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  overflow: hidden;
  height: 100vh;

  &.hasSider {
    flex-direction: row;
  }
}

</style>