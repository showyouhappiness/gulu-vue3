<demo>
响应式布局
</demo>

<template>
  <gulu-row gutter="10">
    <gulu-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card"/>
    </gulu-col>
    <gulu-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card bg-light"/>
    </gulu-col>
    <gulu-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card"/>
    </gulu-col>
    <gulu-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card bg-light"/>
    </gulu-col>
    <gulu-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card"/>
    </gulu-col>
    <gulu-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card bg-light"/>
    </gulu-col>
    <gulu-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card"/>
    </gulu-col>
    <gulu-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card bg-light"/>
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
.gulu-col {
  margin-bottom: 20px;
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