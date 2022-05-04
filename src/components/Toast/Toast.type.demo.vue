<demo>
  不同状态
</demo>

<template>
  <gulu-button @click="onClickNormal">普通 normal</gulu-button>
  <gulu-button @click="onClickSecondary">次级 secondary</gulu-button>
  <gulu-button @click="onClickSuccess">成功 success</gulu-button>
  <gulu-button @click="onClickWarning">警告 warning</gulu-button>
  <gulu-button @click="onClickError">错误 error</gulu-button>
</template>

<script lang="ts">
import {Toast as GuluToast} from '../../lib/toast/toast'
import GuluButton from '../../lib/Button.vue'

export default {
  components: { GuluButton },
  setup() {
    const onClickNormal = () => {
      GuluToast({ text: '这是一条普通的消息提示~', type: 'normal' });
    };
    const onClickSecondary = () => {
      GuluToast({ text: '这是一条次要的消息提示~', type: 'secondary' });
    };
    const onClickSuccess = () => {
      GuluToast({ text: '这是一条成功的消息提示~', type: 'success' });
    };
    const onClickWarning = () => {
      GuluToast({ text: '这是一条警告提示~', type: 'warning' });
    };
    const onClickError = () => {
      GuluToast({ text: '这是一条错误提示~', type: 'error' });
    };

    return { onClickNormal, onClickSecondary, onClickSuccess, onClickWarning, onClickError };
  },
};
</script>

<style lang="scss" scoped>
.gulu-button {
  margin-top: 14px;
}
</style>
