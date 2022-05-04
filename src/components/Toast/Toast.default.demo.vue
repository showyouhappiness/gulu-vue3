<demo>
常规使用
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
    let index = 1;
    const onClick = () => {
      GuluToast({text: `这是第 ${index++} 条消息提示~`});
    };

    return {onClick};
  },
};
</script>

<style lang="scss" scoped>
</style>
