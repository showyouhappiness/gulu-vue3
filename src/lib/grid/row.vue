<template>
  <div :class="classes" :style="style">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import type {PropType} from 'vue';
import {computed, provide} from 'vue';

type RowJustifyType = 'end' | 'start' | 'center' | 'space-around' | 'space-between';

interface RowProps {
  gutter: number | string;
  justify: RowJustifyType;
}

export default {
  name: "GuluRow",
  props: {
    gutter: {
      type: [Number, String]
    },
    justify: {
      type: String as PropType<RowJustifyType>,
      required: false,
      validator: (val: string) => {
        return ['end', 'start', 'center', 'space-between', 'space-around'].includes(val);
      },
    },
  },
  setup(props: RowProps, {slots}) {
    const gutter = computed(() => props.gutter);
    provide('GuluRow', {gutter});

    const style = computed(() => {
      const marginValue = props.gutter ? `${-props.gutter / 2}px` : '';
      return {
        marginLeft: marginValue,
        marginRight: marginValue,
      };
    });

    const classes = computed(() => [
      'gulu-row',
      {[`gulu-justify-${props.justify}`]: props.justify},
    ]);

    return {classes, style, gutter}
  },
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