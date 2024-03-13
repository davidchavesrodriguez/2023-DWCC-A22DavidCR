<template>
  <div>
    <button @click="activeTab= 'ListaRecursos'">Lista</button>
    <button @click="activeTab= 'Formulario'">Formulario</button>

    <KeepAlive>
      <component :is="activeTab" @submittedForm="handleForm"></component>
    </KeepAlive>
  </div>
</template>

<script>
import ListaRecursos from "./components/ListaRecursos.vue"
import Formulario from "./components/Formulario.vue"

export default {
  name: "App",
  components:{
    ListaRecursos, 
    Formulario
  },
  data() {
    return {
      activeTab: "ListaRecursos",
      formData: {}
    }
  },
  methods:{
    handleForm(resource){
      this.formData = resource;
    }
  }
}
</script>

<style scoped>

</style>
