<template>
  <h1>PopOver 示例</h1>
  <section class="second-title">
    <h2>基本用法</h2>
    <p>支持不同的激活方式，包含 hover, click, focus</p>
  </section>
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
