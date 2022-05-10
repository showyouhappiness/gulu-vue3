<template>
  <h1>Sticky 示例</h1>
  <section class="second-title">
    <h2>基本用法</h2>
  </section>
  <Demo :component="StickyDefaultDemo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import StickyDefaultDemo from './Sticky.default.demo.vue';
export default {
  components: {
    Demo
  },
  setup() {
    return {
      StickyDefaultDemo,
    }
  }
}
</script>
