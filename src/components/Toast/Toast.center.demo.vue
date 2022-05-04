<demo>
文字居中
</demo>

<template>
  <gulu-button @click="onClick">打开 toast</gulu-button>
</template>

<script lang="ts">
import {Toast as GuluToast} from '../../lib/toast/toast'
import GuluButton from '../../lib/Button.vue'

export default {
  components: {GuluButton},
  setup() {
    const onClick = () => {
      GuluToast({
        text: '这是一条居中的消息提示~',
        center: true,
      });
    };

    return {onClick};
  },
};
</script>

<style lang="scss" scoped>
</style>
