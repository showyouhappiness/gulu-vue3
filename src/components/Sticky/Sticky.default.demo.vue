<demo>
常规用法
</demo>

<template>
  <g-sticky :distance="distance">
    <div style="border: 1px solid red;height: 20px;"></div>
  </g-sticky>
  <p>段落1</p>
  <p>段落2</p>
  <p>段落3</p>
  <p>段落4</p>
  <p>段落5</p>
  <p>段落6</p>
  <p>段落7</p>
  <p>段落8</p>
  <p>段落9</p>
  <p>段落10</p>
</template>

<script lang="ts">
import GSticky from '../../lib/sticky.vue';

export default {
  components: {GSticky},
};
</script>

<style lang="scss" scoped>
.gulu-button {
  margin-right: 20px;
}
</style>