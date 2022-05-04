<demo>
可关闭
</demo>

<template>
  <gulu-button @click="onClick1">可关闭，delay: 5</gulu-button>
  <gulu-button @click="onClick2">可关闭，delay: 0</gulu-button>
</template>

<script lang="ts">
import {Toast as GuluToast} from '../../lib/toast/toast'
import GuluButton from '../../lib/Button.vue'

export default {
  components: {GuluButton},
  setup() {
    const onClick1 = () => {
      GuluToast({
        text: '这是一条可以关闭的消息提示~',
        showClose: true,
        delay: 5,
      });
    };
    const onClick2 = () => {
      GuluToast({
        text: '这是一条可以关闭的消息提示~',
        showClose: true,
        delay: 0,
      });
    };

    return {onClick1, onClick2};
  },
};
</script>

<style lang="scss" scoped>
</style>
