<!-- App.vue -->
<template>
  <input type="radio" name="pick" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
    @click="currentTab = tab"> {{ tab }}
  <div>

    <Contador></Contador>

  </div>
</template>
<script>
import Contador from "./components/Contador.vue"
import CaixaTexto from "./components/CaixaTexto.vue";
export default {
  components: { Contador, CaixaTexto },
  data() {
    return {
      currentTab: "Contador",
      tabs: ["Contador", "CaixaTexto"]
    }
  },
}
</script>
<style></style>