<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>
<script lang="ts">
import {ref} from 'vue';

export default {
  name: "GuluSider",
  setup() {
    const visible = ref(true)
    return {visible}
  }
}
</script>

<style scoped lang="scss">
.sider {
  position: relative;

  & > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}

.fade-enter, .fade-leave-to {
  margin-left: -200px;
}
</style>