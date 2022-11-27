import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// import global css
import "./assets/main.css";
import { projectAuth } from "./firebase/config";

let app;
const pinia = createPinia();
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).use(pinia).mount("#app");
  }
});
