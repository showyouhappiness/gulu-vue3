<demo>
对齐方式
</demo>

<template>
  <gulu-row justify="start">
    <gulu-col :span="6">
      <div class="card"></div>
    </gulu-col>
    <gulu-col :span="6">
      <div class="card bg-light"></div>
    </gulu-col>
    <gulu-col :span="6">
      <div class="card"></div>
    </gulu-col>
  </gulu-row>
  <gulu-row justify="center">
    <gulu-col :span="6">
      <div class="card"></div>
    </gulu-col>
    <gulu-col :span="6">
      <div class="card bg-light"></div>
    </gulu-col>
    <gulu-col :span="6">
      <div class="card"></div>
    </gulu-col>
  </gulu-row>
  <gulu-row justify="end">
    <gulu-col :span="6">
      <div class="card"></div>
    </gulu-col>
    <gulu-col :span="6">
      <div class="card bg-light"></div>
    </gulu-col>
    <gulu-col :span="6">
      <div class="card"></div>
    </gulu-col>
  </gulu-row>
  <gulu-row justify="space-between">
    <gulu-col :span="6">
      <div class="card"></div>
    </gulu-col>
    <gulu-col :span="6">
      <div class="card bg-light"></div>
    </gulu-col>
    <gulu-col :span="6">
      <div class="card"></div>
    </gulu-col>
  </gulu-row>
  <gulu-row justify="space-around">
    <gulu-col :span="6">
      <div class="card"></div>
    </gulu-col>
    <gulu-col :span="6">
      <div class="card bg-light"></div>
    </gulu-col>
    <gulu-col :span="6">
      <div class="card"></div>
    </gulu-col>
  </gulu-row>
</template>

<script lang="ts">
import GuluRow from '../../lib/grid/Row.vue';
import GuluCol from '../../lib/grid/Col.vue'

export default {
  components: {GuluRow, GuluCol},
};
</script>

<style lang="scss" scoped>
.gulu-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.card {
  min-height: 36px;
  background: #d3dce6;
  border-radius: 4px;

  &.bg-light {
    background: #e5e9f2;
  }
}
</style>