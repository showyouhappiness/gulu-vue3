<template>
  <div>
    <router-link to="/">test</router-link>
    |
    <router-link to="/test2">test2</router-link>
  </div>
  <router-view to="/"></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>
