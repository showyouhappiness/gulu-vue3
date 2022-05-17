<template>
  <h1>Layout 示例</h1>
  <section class="second-title">
    <h2>基本用法</h2>
    <desc>当子元素中包含 Aside 时，全部子元素会水平左右排列，否则会垂直上下排列。Header：顶栏容器。Aside：侧边栏容器。Content：主要区域容器。Footer：底栏容器。</desc>
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