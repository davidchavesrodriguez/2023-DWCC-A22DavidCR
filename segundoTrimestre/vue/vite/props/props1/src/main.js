import { createApp } from 'vue'
import App from './App.vue'
import PropPerson from "./components/PropPerson.vue"

const app = createApp(App);
app.component("PropPerson", PropPerson);
app.mount('#app'); 
