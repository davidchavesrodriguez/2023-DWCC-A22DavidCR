<template>
  <div>
<MyComponent v-slot="{foodName}"><p>{{foodName}}</p></MyComponent>
  </div>
</template>
<script>
import MyComponent from './components/MyComponent.vue';

export default {
  components: {
    MyComponent
  }
}
</script>
<style></style>