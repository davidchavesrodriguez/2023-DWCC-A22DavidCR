import { createApp } from 'vue'
import App from './App.vue'
import ShowData from "./components/ShowData.vue";
import FormData from "./components/FormData.vue";

createApp(App).mount('#app')
App.component("ShowData", ShowData)
App.component("FormData", FormData)