<template>
  <h1>Grid 示例</h1>
  <section class="second-title">
    <h2>基本用法</h2>
  </section>
  <Demo :component="GridDefaultDemo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import GridDefaultDemo from './grid.default.demo.vue';
export default {
  components: {
    Demo
  },
  setup() {
    return {
      GridDefaultDemo,
    }
  }
}
</script>
