<!-- ResourceForm.vue -->
<template>
    <div>
      <h2>Formulario para Agregar Recurso</h2>
      <form @submit.prevent="addResource">
        <label for="title">Título:</label>
        <input type="text" id="title" v-model="newResource.title" required>
        <label for="description">Descripción:</label>
        <input type="text" id="description" v-model="newResource.description" required>
        <label for="link">Enlace:</label>
        <input type="text" id="link" v-model="newResource.link" required>
        <button type="submit">Agregar Recurso</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newResource: {
          title: '',
          description: '',
          link: ''
        }
      };
    },
    methods: {
      addResource() {
        if (this.newResource.title && this.newResource.description && this.newResource.link) {
          this.$emit('add-resource', this.newResource);
          this.newResource = { title: '', description: '', link: '' };
        } else {
          this.$emit('show-modal');
        }
      }
    }
  };
  </script>
  