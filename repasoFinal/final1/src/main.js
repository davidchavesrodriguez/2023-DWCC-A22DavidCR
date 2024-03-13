import { createApp } from 'vue'
import App from './App.vue'
import ResourceList from "./components/ResourceList.vue";
import ResourceForm from "./components/ResourceForm.vue";
import DynamicComponent from "./components/DynamicComponent.vue";



const app = createApp(App);
app.component('ResourceList', ResourceList);
app.component('ResourceForm', ResourceForm);
app.component('DynamicComponent', DynamicComponent);
app.mount('#app')