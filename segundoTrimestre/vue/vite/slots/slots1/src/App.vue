<!-- App.vue -->
<template>
  <MyComponent v-slot="propiedades"> {{ propiedades }}
    <br>
  </MyComponent>
</template>

<script>
import MyComponent from './components/MyComponent.vue';

export default {
  components: {
    MyComponent
  }
}
</script>

<style ></style>