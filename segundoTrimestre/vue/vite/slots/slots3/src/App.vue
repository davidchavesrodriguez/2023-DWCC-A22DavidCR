<template>
  <div>
    <MyComponent v-slot="{ items }">
      <div v-for="(item) in items">
        <p>{{ item.body }}</p>
        <p>Username: {{ item.username }}</p>
        <p>Likes: {{ item.likes }}</p>
        <hr>
      </div>
    </MyComponent>
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

<style>
/* Estilos opcionales para el componente App */
</style>
