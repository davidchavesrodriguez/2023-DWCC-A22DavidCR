<!-- ResourceList.vue -->
<template>
    <div>
      <h2>Lista de Recursos</h2>
      <button @click="toggleForm">Agregar Nuevo Recurso</button>
      <ul>
        <li v-for="resource in resources" :key="resource.id">
          <h3>{{ resource.title }}</h3>
          <p>{{ resource.description }}</p>
          <a :href="resource.link" target="_blank">Ir al enlace</a>
          <button @click="deleteResource(resource.id)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        resources: [
          { id: 1, title: 'Ejemplo 1', description: 'Descripción del ejemplo 1', link: 'https://ejemplo1.com' },
          { id: 2, title: 'Ejemplo 2', description: 'Descripción del ejemplo 2', link: 'https://ejemplo2.com' }
        ]
      };
    },
    methods: {
      toggleForm() {
        this.$emit('toggle-form');
      },
      deleteResource(id) {
        this.resources = this.resources.filter(resource => resource.id !== id);
      }
    }
  };
  </script>
  