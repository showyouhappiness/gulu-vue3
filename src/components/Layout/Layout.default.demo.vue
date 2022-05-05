<demo>
常规用法
</demo>

<template>
  <g-layout>
    <g-sider>sider</g-sider>
    <g-layout>
      <g-header>header</g-header>
      <g-content>content</g-content>
      <g-footer>footer</g-footer>
    </g-layout>
  </g-layout>
</template>

<script lang="ts">
import GLayout from "../../lib/layout/layout.vue";
import GSider from "../../lib/layout/sider.vue";
import GHeader from "../../lib/layout/header.vue";
import GContent from "../../lib/layout/content.vue";
import GFooter from "../../lib/layout/footer.vue";

export default {
  components: {GLayout, GSider, GHeader, GContent, GFooter},
};
</script>

<style lang="scss" scoped>
.gulu-button {
  margin-right: 20px;
}

.header {
  background: #999;
  height: 100px;
}

.sider {
  background: #333;
  width: 200px;
}

.footer {
  background: #ccc;
  height: 50px;
}
</style>