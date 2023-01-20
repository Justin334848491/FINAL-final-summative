import { createRouter, createWebHistory } from "vue-router";
import MainMenu from "../views/MainMenu.vue";
import PlayerStats from "../views/Login.vue";
import Popup from "../views/Popup.vue";
import Mainstore from "../views/Mainstore.vue";
import Shoppingcart from "../views/Shoppingcart.vue";

const routes = [
  {
    path: "/",
    name: "MainMenu",
    component: MainMenu,
  },
  {
    path: "/login",
    name: "Login",
    component: PlayerStats,
  },
  {
    path: "/Popup",
    name: "Popup",
    component: Popup,
  },
  {
    path: "/Mainstore",
    name: "Mainstore",
    component: Mainstore,
  },
  {
    path: "/Shoppingcart",
    name: "Shoppingcart",
    component: Shoppingcart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
