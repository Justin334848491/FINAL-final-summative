import { createRouter, createWebHistory } from "vue-router";
import MainMenu from "../views/MainMenu.vue";
import PlayerStats from "../views/Register.vue";
import Popup from "../components/Popup.vue";
import Mainstore from "../views/Mainstore.vue";
import Shoppingcart from "../views/Shoppingcart.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "MainMenu",
    component: MainMenu,
  },
  {
    path: "/Register",
    name: "Register",
    component: PlayerStats,
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
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
