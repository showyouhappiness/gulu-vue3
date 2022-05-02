<template>
  <Teleport to="body" v-if="visible">
    <div ref="contentWrapper" class="content-wrapper" :style="popoverStyle" v-if="$slots.content"
         :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
  </Teleport>
  <span ref="triggerWrapper">
      <slot></slot>
    </span>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
} from "vue"

type TriggerType = 'click' | 'hover' | 'focus';
type PositionType = 'top' | 'left' | 'right' | 'bottom';

interface PopoverProps {
  trigger?: TriggerType;
  position?: PositionType;
  width?: number | string;
}


export default defineComponent({
  name: "GuluPopover",
  props: {
    position: {
      type: String as PropType<PositionType>,
      default: 'top',
      validator(value: string) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String as PropType<TriggerType>,
      default: 'click',
      validator(value: string) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  setup(props: PopoverProps, context) {
    const visible = ref<boolean>(false); // 类型定义
    const contentWrapper = ref<HTMLDivElement>(null);
    const triggerWrapper = ref<HTMLSpanElement>(null);
    const popoverStyle = ref({} as CSSStyleDeclaration);
    const timer = ref(0);

    const positionContent = () => {
      let {width, height, top, left} = triggerWrapper.value.getBoundingClientRect()
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top + window.scrollY - height / 2,
          left: left + window.scrollX,
        },
        right: {
          top: top + window.scrollY - height / 2,
          left: left + width + window.scrollX,
        }
      }
      popoverStyle.value.top = `${positions[props.position].top}px`
      popoverStyle.value.left = `${positions[props.position].left}px`
    }

    const onclickDocument = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
          target !== contentWrapper.value &&
          !contentWrapper.value?.contains(target) &&
          !triggerWrapper.value?.contains(target)
      ) {
        handleClose();
      }
    };

    const handleOpen = () => {
      visible.value = true;
      if (props.trigger === 'hover') {
        clearTimeout(timer.value);
      }
      nextTick(() => {
        if (props.trigger === 'hover') {
          contentWrapper.value.addEventListener('mouseenter', () => {
            clearTimeout(timer.value);
          });
          contentWrapper.value.addEventListener('mouseleave', () => {
            handleClose();
          });
        }
        positionContent();
        document.addEventListener('click', onclickDocument);
      });
    };

    const closePopoverAndRemoveEvent = () => {
      visible.value = false;
      document.removeEventListener('click', onclickDocument);
    };

    const handleClose = () => {
      if (props.trigger === 'hover') {
        timer.value = window.setTimeout(() => {
          closePopoverAndRemoveEvent();
        }, 200);
      } else {
        closePopoverAndRemoveEvent();
      }
    };


    const handleClick = () => {
      if (context.slots.content) {
        visible.value ? handleClose() : handleOpen();
      }
    };


    const eventMap = {
      click: [{name: 'click', handle: handleClick}],
      hover: [
        {name: 'mouseenter', handle: handleOpen},
        {name: 'mouseleave', handle: handleClose},
      ],
      focus: [
        {name: 'focusin', handle: handleOpen},
        {name: 'focusout', handle: handleClose},
      ],
    };

    const currentEventList = eventMap[props.trigger];

    onMounted(() => {
      currentEventList.forEach(event => {
        triggerWrapper.value.addEventListener(event.name, event.handle);
      });
    });

    onBeforeUnmount(() => {
      currentEventList.forEach(event => {
        triggerWrapper.value.removeEventListener(event.name, event.handle);
      });
    });


    return {
      visible,
      popoverStyle,
      triggerWrapper,
      contentWrapper,
      handleClose,
    }
  },
  // x() 一个函数
  // y=x().bind(this) 生成另外一个函数
})
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  border: 1px solid #ccc;
  //box-shadow: 0 0 5px #ccc;
  filter: drop-shadow(0 2px 2px #ccc);
  background-color: #fff;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  border-radius: 5px;

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before, &::after {
      left: 10px;
    }

    &::before {
      border-top-color: #ccc;
      border-bottom: none;
      top: 100%;
    }

    &::after {
      border-top-color: #fff;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &::before, &::after {
      left: 10px;
    }

    &::before {
      border-bottom-color: #ccc;
      border-top: none;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: #fff;
      border-top: none;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before, &::after {
      top: 10px;
    }

    &::before {
      border-left-color: #ccc;
      border-right: none;
      left: 100%;
    }

    &::after {
      border-left-color: #fff;
      border-right: none;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 10px;

    &::before, &::after {
      top: 10px;
    }

    &::before {
      border-right-color: #ccc;
      border-left: none;
      right: 100%;
    }

    &::after {
      border-right-color: #fff;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style>