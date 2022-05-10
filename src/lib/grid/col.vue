<template>
  <div :class="classes" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import type {PropType} from 'vue';
import {computed, inject} from 'vue';

type SizeObjectType = {
  span: number | string;
  offset: number | string;
};

interface ColProps {
  span: number | string;
  offset: number | string;
  xs: number | string | SizeObjectType;
  sm: number | string | SizeObjectType;
  md: number | string | SizeObjectType;
  lg: number | string | SizeObjectType;
  xl: number | string | SizeObjectType;
  xxl: number | string | SizeObjectType;
}

export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    xs: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
    sm: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
    md: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
    lg: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
    xl: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
    xxl: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
  },
  setup(props: ColProps, {slots}) {
    const {gutter} = inject('GuluRow', {gutter: {value: 0}});

    console.log(gutter);

    const classes = computed(() => {
      const ret = [
        'gulu-col',
        {
          [`gulu-col-span-${props.span}`]: props.span,
          [`gulu-col-offset-${props.offset}`]: props.offset,
        },
      ];

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
      sizes.forEach(size => {
        const propsSizeValue = props[size];
        const propsSizeType = typeof propsSizeValue;
        if (propsSizeType === 'number' || propsSizeType === 'string') {
          ret.push(`gulu-col-${size}-span-${propsSizeValue}`);
        } else if (propsSizeType === 'object') {
          Object.keys(propsSizeValue).forEach(prop => {
            ret.push(`gulu-col-${size}-${prop}-${propsSizeValue[prop]}`);
          });
        }
      });

      return ret;
    });

    const style = computed(() => {
      const paddingValue = gutter.value ? `${gutter.value / 2}px` : '';
      return {
        paddingLeft: paddingValue,
        paddingRight: paddingValue,
      };
    });
    return {gutter, classes, style};
  },
}
</script>

<style scoped lang="scss">
@mixin grid-size($class-prefix) {
  @for $n from 0 through 24 {
    &.#{$class-prefix}-span-#{$n} {
      // max-width: (math.div(1, 24) * $n * 100) * 1%;
      // flex: 0 0 (math.div(1, 24) * $n * 100) * 1%;
      max-width: (1 / 24) * $n * 100 * 1%;
      flex: 0 0 (1 / 24) * $n * 100 * 1%;
    }
    &.#{$class-prefix}-offset-#{$n} {
      // margin-left: (math.div(1, 24) * $n * 100) * 1%;
      margin-left: (1 / 24) * $n * 100 * 1%;
    }
  }
}

.gulu-col {
  @include grid-size(gulu-col);

  @media (max-width: 576px) {
    @include grid-size(gulu-col-xs);
  }

  @media (min-width: 576px) {
    @include grid-size(gulu-col-sm);
  }

  @media (min-width: 768px) {
    @include grid-size(gulu-col-md);
  }

  @media (min-width: 992px) {
    @include grid-size(gulu-col-lg);
  }

  @media (min-width: 1200px) {
    @include grid-size(gulu-col-xl);
  }
  @media (min-width: 1600px) {
    @include grid-size(gulu-col-xxl);
  }
}

</style>