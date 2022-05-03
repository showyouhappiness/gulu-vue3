<template>
  <svg aria-hidden="true" class="coast-icon">
    <use :xlink:href="`#${prefix}${name}`"></use>
  </svg>
</template>

<script lang="ts">
import './iconfont.js';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: false,
      default: 'gulu-icon-',
    },
  },
  setup() {},
});
</script>
