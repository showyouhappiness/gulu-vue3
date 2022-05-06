<template>
  <div :class="classes" ref="DomList">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, computed, VNode} from "vue";
import layout from "../layout/Layout";

export default {
  name: "GuluLayout",
  setup(props, {slots}) {
    const isHasAside = computed(() => {
      if (slots?.default) {
        const children: Array<VNode> = slots.default();
        return children.some(child => {
          const tag = (child.type as Component).name;
          return tag === 'GuluSider';
        });
      }
    });
    const classes = computed(() => {
      if (isHasAside?.value) {
        return ["layout", "hasSider"]
      } else {
        return ["layout"]
      }
    });
    return {
      isHasAside, classes
    }

  },
}
</script>

<style scoped lang="scss">
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;

  &.hasSider {
    flex-direction: row;
  }
}

</style>