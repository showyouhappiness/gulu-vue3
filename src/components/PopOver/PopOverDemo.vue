<template>
  <h1>PopOver 示例</h1>
  <Demo :component="PopoverDefaultDemo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import PopoverDefaultDemo from './Popover.default.demo.vue';
export default {
  components: {
    Demo
  },
  setup() {
    return {
      PopoverDefaultDemo,
    }
  }
}
</script>
