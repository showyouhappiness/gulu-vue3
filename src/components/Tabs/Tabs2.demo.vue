<demo>
不可用状态
</demo>
<template>
  <Tabs v-model:selected="name">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3" disabled>内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
import {
  ref
} from 'vue'

export default {
  components: {
    Tab,
    Tabs
  },
  setup() {
    const name = ref('导航2')
    return {
      name
    }
  }
}
</script>
