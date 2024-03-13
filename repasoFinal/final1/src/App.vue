<!-- App.vue -->
<template>
  <div id="app">
    <dynamic-component :component="currentComponent" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentComponent: 'ResourceList'
    };
  },
};
</script>

<style>
  
</style>