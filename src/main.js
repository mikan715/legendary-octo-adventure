import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./app.css";

const pinia = createPinia();
const app = createApp(App);
const apiEndpoint = import.meta.env.VITE_API;
app.use(pinia);
app.use(router);

app.mount("#app");
