import { createApp } from 'vue'
import App from './App.vue'
import Person from "./components/Person.vue"

const app = createApp(App);
app.component("Person", Person);
app.mount('#app'); 
