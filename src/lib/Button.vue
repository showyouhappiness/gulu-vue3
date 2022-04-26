<template>
  <button class="gulu-button" :class="`theme-${theme}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "GuluButton",
  props: {
    theme: {
      type: String,
      default: "button"
    }
  }
}
</script>

<style scoped lang="scss">

</style>