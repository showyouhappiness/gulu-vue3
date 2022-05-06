<template>
  <h1>Layout 示例</h1>
  <section class="second-title">
    <h2>基本用法</h2>
  </section>
  <Demo :component="LayoutDefaultDemo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import LayoutDefaultDemo from './Layout.default.demo.vue';
export default {
  components: {
    Demo
  },
  setup() {
    return {
      LayoutDefaultDemo,
    }
  }
}
</script>
