import { createApp } from 'vue'
import App from './App.vue'
import Component from "./components/Component.vue"

createApp(App).mount('#app')
App.component("Component", Component)