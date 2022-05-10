<template>
  <h1>Grid 示例</h1>
  <section class="second-title">
    <h2>基本用法</h2>
    <desc>通过基础的24分栏，迅速简便地创建布局。</desc>
  </section>
  <Demo :component="GridDefaultDemo"/>
  <section class="second-title">
    <h2>基本用法</h2>
    <desc>Row 组件提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</desc>
  </section>
  <Demo :component="GridGutterDemo"/>
  <section class="second-title">
    <h2>基本用法</h2>
    <desc>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</desc>
  </section>
  <Demo :component="GridHybridDemo"/>
  <section class="second-title">
    <h2>基本用法</h2>
    <desc>通过 flex 布局的 justify-content 来对分栏进行灵活的对齐，并可通过CoRow 的 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</desc>
  </section>
  <Demo :component="GridJustifyDemo"/>
  <section class="second-title">
    <h2>基本用法</h2>
    <desc>支持偏移指定的栏数，通过制定 CoCol 组件的 offset 属性可以指定分栏偏移的栏数。</desc>
  </section>
  <Demo :component="GridOffsetDemo"/>
  <section class="second-title">
    <h2>基本用法</h2>
    <desc>参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl xxl。</desc>
  </section>
  <Demo :component="GridResponsiveDemo"/>





  <desc></desc>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import GridDefaultDemo from './Grid.default.demo.vue';
import GridGutterDemo from './Grid.gutter.demo.vue';
import GridHybridDemo from './Grid.hybrid.demo.vue';
import GridOffsetDemo from './Grid.offset.demo.vue';
import GridJustifyDemo from './Grid.justify.demo.vue';
import GridResponsiveDemo from './Grid.responsive.demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      GridDefaultDemo,
      GridGutterDemo,
      GridHybridDemo,
      GridOffsetDemo,
      GridJustifyDemo,
      GridResponsiveDemo,
    }
  }
}
</script>
