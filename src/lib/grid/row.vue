<template>
<div class="row" :style="rowStyle">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "GuluRow",
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  computed:{
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px'
      }
    }
  },
  mounted() {
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang="scss">
.gulu-row {
  display: flex;
  flex-wrap: wrap;

  &.gulu-justify-center {
    justify-content: center;
  }

  &.gulu-justify-start {
    justify-content: flex-start;
  }

  &.gulu-justify-end {
    justify-content: flex-end;
  }

  &.gulu-justify-space-around {
    justify-content: space-around;
  }

  &.gulu-justify-space-between {
    justify-content: space-between;
  }
}
</style>