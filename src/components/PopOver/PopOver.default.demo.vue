<demo>
常规用法
</demo>

<template>
  <co-popover trigger="hover">
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
    <co-button>hover 激活</co-button>
  </co-popover>
  <co-popover trigger="click">
    <co-button>click 激活</co-button>
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
  </co-popover>
  <co-popover trigger="focus">
    <co-button>focus 激活</co-button>
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
  </co-popover>
</template>

<script lang="ts">
import CoPopover from '../../lib/PopOver.vue'
import CoButton from '../../lib/Button.vue'

export default {
  components: { CoButton, CoPopover },
};
</script>

<style lang="scss" scoped>
.gulu-button {
  margin-right: 20px;
}
</style>