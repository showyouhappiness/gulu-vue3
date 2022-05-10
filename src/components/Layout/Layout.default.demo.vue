<!--<demo>-->
<!--  <title>常见页面布局</title>-->
<!--  <desc>Layout：外层容器。当子元素中包含 Aside 时，全部子元素会水平左右排列，否则会垂直上下排列。Header：顶栏容器。Aside：侧边栏容器。Content：主要区域容器。Footer：底栏容器。</desc>-->
<!--</demo>-->
<demo>
常规用法
</demo>


<template>
  <G-layout>
    <G-header>Header</G-header>
    <G-content>Content</G-content>
  </G-layout>

  <G-layout>
    <G-header>Header</G-header>
    <G-content>Content</G-content>
    <G-footer>Footer</G-footer>
  </G-layout>

  <G-layout>
    <G-aside width="200px">Aside</G-aside>
    <G-content>Content</G-content>
  </G-layout>

  <G-layout>
    <G-header>Header</G-header>
    <G-layout>
      <G-aside width="200px">Aside</G-aside>
      <G-content>Content</G-content>
    </G-layout>
  </G-layout>

  <G-layout>
    <G-header>Header</G-header>
    <G-layout>
      <G-aside width="200px">Aside</G-aside>
      <G-layout>
        <G-content>Content</G-content>
        <G-footer>Footer</G-footer>
      </G-layout>
    </G-layout>
  </G-layout>

  <G-layout>
    <G-aside width="200px">Aside</G-aside>
    <G-layout>
      <G-header>Header</G-header>
      <G-content>Content</G-content>
    </G-layout>
  </G-layout>

  <G-layout>
    <G-aside width="100px">Aside</G-aside>
    <G-layout>
      <G-header height="70px">Header</G-header>
      <G-content>Content</G-content>
      <G-footer height="50px">Footer</G-footer>
    </G-layout>
  </G-layout>
</template>
<script lang="ts">
import GLayout from "../../lib/layout/Layout";
import GAside from "../../lib/layout/Aside";
import GHeader from "../../lib/layout/Header";
import GContent from "../../lib/layout/Content";
import GFooter from "../../lib/layout/Footer";

export default {
  components: { GAside, GFooter, GHeader, GContent, GLayout },
};
</script>

<style lang="scss" scoped>
.Gulu-layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  &.Gulu-layout-has-aside {
    flex-direction: row;
  }
}

.Gulu-content {
  flex-grow: 1;
}
.demo-component > .Gulu-layout {
  margin-bottom: 40px;
  color: #fff;

  * {
    text-align: center;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .Gulu-header,
  .Gulu-footer {
    background: #7dbcea;
    line-height: 60px;
  }
  .Gulu-content {
    background: #108ee9;
    line-height: 120px;
  }
  .Gulu-aside {
    background: #3ba0e9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
