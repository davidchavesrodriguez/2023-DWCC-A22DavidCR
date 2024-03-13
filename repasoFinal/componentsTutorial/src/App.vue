<template>
  <!-- <Welcome name="Julio" secret-name="Pino"/>
  <Welcome name="Vero" secret-name="Remera"/>
  <Welcome name="Sofi" secret-name="Fosía"/>
  <Welcome :name="name" :secretName="rango"/>
  <Article title="Primeiro" :likes="333" :isPublished="false"/> -->
  <!-- <ComponentC></ComponentC>
  <button type="button" @click="showPopup = true">Show popup</button>
  <Popup v-show="showPopup" @close="closePopup"></Popup> -->
  <!-- <input type="text" name="" id="" v-model="name">
  <Input v-model="name"></Input> --> 
  <!-- <Card>
    <h1>Card 1</h1>
  </Card>
  <Card>
    <p>Second Card</p>
  </Card> -->
<!-- <NameList>
  <template #default="slotProps">
    {{ slotProps.firstName }} {{ slotProps.lastName }}
  </template>
</NameList>
<NameList>
  <template #default="slotProps">
    {{ slotProps.lastName }}
  </template>
</NameList> -->
<!-- <button @click="activeTab= 'TabA'">Tab A</button>
<button @click="activeTab= 'TabB'">Tab B</button>
<button @click="activeTab= 'TabC'">Tab C</button>

<keep-alive>

  <component :is="activeTab"></component>
</keep-alive> -->


<!-- <TabA v-if="activeTab === 'TabA'"></TabA>
<TabB v-if="activeTab === 'TabB'"></TabB>
<TabC v-if="activeTab === 'TabC'"></TabC> -->

<teleport to='#portal-root'><Portal></Portal></teleport>

</template>
<script>
import Welcome from "./components/Welcome.vue"
import Article from "./components/Article.vue"
import ComponentC from "./components/ComponentC.vue"
import Popup from "./components/Popup.vue"
import Card from "./components/Card.vue"
import NameList from "./components/NameList.vue"
import TabA from "./components/TabA.vue"
import TabB from "./components/TabB.vue"
import TabC from "./components/TabC.vue"
import Portal from "./components/Portal.vue"

export default {
  name: "App",
  components: {
    Welcome, Article, ComponentC, Popup, Card, NameList, TabA, TabB, TabC, Portal
  },
  data() {
    return {
      name: "",
      rango: "Intento de Profesor",
      provideName: "Cristina",
      showPopup: false,
      activeTab: "TabA"
    }
  },
  provide() {
    return {
      username: this.provideName,
    }
  },
  methods: {
    closePopup(name) {
      this.showPopup = false;
      console.log("name", name);

    }
  },
}
</script>
<style></style>