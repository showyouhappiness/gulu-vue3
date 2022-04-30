<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item" v-for="(pageMessage,index) in pageMessages"
           :ref="el => { if (pageMessage.props.title===selected) selectedItem = el }"
           @click="select(pageMessage)"
           :class="{selected: pageMessage.props.title=== selected ,disabled: pageMessage.props.disabled ===''}"
           :key="index">{{ pageMessage.props.title }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {
  computed,
  ref,
  watchEffect,
  onMounted
} from 'vue'

export default {
  props: {
    selected: {
      type: String
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)

    onMounted(() => {
      watchEffect(() => {
        const {
          width
        } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {
          left: left1
        } = container.value.getBoundingClientRect()
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      })
    })

    const pageMessages = context.slots.default()  // 获取默认的slot,从这里可以获取到页面里面的信息
    pageMessages.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(() => {
      return pageMessages.find(tag => tag.props.title === props.selected)
    })
    // 处理点击事件，当有disabled属性时不更新选中结点，否则选中点击结点
    const select = (pageMessage) => {
      if (pageMessage.props.disabled === "") {
        return;
      }
      context.emit("update:selected", pageMessage.props.title);
    };


    return {
      current,
      pageMessages,
      select,
      selectedItem,
      indicator,
      container,
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &.disabled {
        color: #ccc;
        cursor: not-allowed;
      }

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
