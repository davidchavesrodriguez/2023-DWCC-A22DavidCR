import { createApp } from "vue";
import App from "./App.vue";
import Form from "./components/Form.vue";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.component("Form", Form);

app.mount("#app");
