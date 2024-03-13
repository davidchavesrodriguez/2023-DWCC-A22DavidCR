<!-- DynamicComponent.vue -->
<template>
    <component :is="component" />
  </template>
  
  <script>
  export default {
    props: {
      component: {
        type: String,
        required: true
      }
    }
  };
  </script>
  