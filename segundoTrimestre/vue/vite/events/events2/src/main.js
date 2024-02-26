import { createApp } from 'vue'
import App from './App.vue'
import PropPerson from "./components/PropPerson.vue"
import AddPerson from "./components/AddPerson.vue";

const app = createApp(App);
app.component("PropPerson", PropPerson);
app.component("AddPerson", AddPerson);
app.mount('#app'); 
