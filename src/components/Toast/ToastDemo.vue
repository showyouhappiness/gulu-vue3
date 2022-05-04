<template>
  <h1>Switch 组件示例 </h1>
  <section class="second-title">
    <h2>基础用法</h2>
    <p>从顶部出现，3秒后消失</p>
  </section>
  <Demo :component="ToastDefaultDemo"/>
  <section class="second-title">
    <h2>支持type属性</h2>
    <p>在<span>Toast</span>组件中添加<span>type</span>属性，以此来展示该组件的不同状态</p>
    <p>包含的状态有 normal, secondary, success, warning, error</p>
  </section>
  <Demo :component="ToastTypeDemo"/>
  <section class="second-title">
    <h2>支持center属性</h2>
    <p>
      在<span>Toast</span>组件中添加<span>center</span>属性，以此来让文字水平居中
    </p>
  </section>
  <Demo :component="ToastCenterDemo"/>
  <section class="second-title">
    <h2>支持showClose属性</h2>
    <p>可以使用 showClose 属性添加关闭按钮，默认3秒后消失。手动传入 delay 属性控制延时关闭的时间，单位：秒。delay 设置 0 不会被自动关闭。</p>
  </section>
  <Demo :component="ToastCloseDemo"/>
</template>

<script lang="ts">
import ToastDefaultDemo from './Toast.default.demo.vue';
import ToastTypeDemo from './Toast.type.demo.vue';
import ToastCenterDemo from './Toast.center.demo.vue';
import ToastCloseDemo from './Toast.close.demo.vue';
import Demo from '../Demo.vue'

export default {
  components: {Demo},
  setup() {
    return {
      ToastDefaultDemo,
      ToastTypeDemo,
      ToastCenterDemo,
      ToastCloseDemo,
    };
  },
};
</script>
