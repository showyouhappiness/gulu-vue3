<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "GuluContent"
}
</script>

<style scoped lang="scss">
.content {
  flex-grow: 1;
}
</style>