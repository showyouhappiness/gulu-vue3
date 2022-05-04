<template>
  <div
      v-show="visible"
      :class="classes"
      :style="{ top: `${top}px` }"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
  >
    <span>{{ text }}</span>
    <Icon v-if="showClose" class="gulu-toast-close" name="clear" @click="handleClose"/>
  </div>
</template>

<script lang="ts">
import type {PropType} from 'vue';
import {computed, defineComponent, onMounted, ref} from 'vue';
import type {ToastType, ToastProps} from './toast';
import Icon from '../icon/Icon.vue';

export default defineComponent({
  name: 'GuluToast',
  components: {Icon},
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String as PropType<ToastType>,
      required: false,
      default: 'normal',
      validator: (val: string) =>
          ['normal', 'secondary', 'success', 'warning', 'error'].includes(val),
    },
    delay: {
      type: Number,
      required: false,
      default: 3,
    },
    center: {
      type: Boolean,
      required: false,
      default: false,
    },
    showClose: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: String,
      required: false,
      default: '',
    },
    top: {
      type: Number,
      default: 10,
      required: false,
    },
  },
  emits: ['destroy'],
  setup(props: ToastProps, context) {
    const visible = ref(false);
    const timer = ref(null);

    const classes = computed(() => [
      'gulu-toast',
      {
        'gulu-toast-center': props.center,
        [`gulu-toast-${props.type}`]: props.type,
      },
    ]);

    onMounted(() => {
      visible.value = true;
      startTimer();
    });

    const handleClose = () => {
      visible.value = false;
      context.emit('destroy');
    };
    const startTimer = () => {
      if (props.delay > 0) {
        timer.value = setTimeout(() => {
          handleClose();
        }, props.delay * 1000);
      }
    };

    const clearTimer = () => {
      clearTimeout(timer.value);
      timer.value = null;
    };

    return {visible, classes, handleClose, startTimer, clearTimer};
  },
});
</script>
<style lang="scss" scoped>
@import '../../style/common.scss';
.gulu-toast {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  min-width: 380px;
  border-radius: 5px;
  background: #fff;
  color: $colorBlack;
  z-index: $popoverIndex;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  padding: 15px;
  transition: top 0.3s;

  > .gulu-toast-close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
    color: #c0c4cc;
    font-size: 20px;

    &:hover {
      color: #909399;
    }
  }

  &-center {
    text-align: center;
  }

  &-secondary {
    background-color: $secondary;
    color: #fff;
  }

  &-success {
    background-color: $success;
    color: #fff;
  }

  &-warning {
    background-color: $warning;
    color: #fff;
  }

  &-error {
    background-color: $error;
    color: #fff;
  }
}
</style>
