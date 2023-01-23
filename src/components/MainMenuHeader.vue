<template>
  <h1>The Endless Galaxy Movie Store</h1>
  <input id="Registerbutton" type="button" value="Register" @click="login()" />
  <input id="Loginbutton" type="button" value="Login" @click="Register()" />
</template>

<script setup>
import router from "../router/index.js";

function Register() {
  router.push("./Login");
}

function login() {
  router.push("./register");
}
</script>

<style>
h1 {
  text-align: center;
}

#Registerbutton {
  position: relative;
  width: 125px;
  height: 25px;
}

#Loginbutton {
  position: relative;
  width: 125px;
  height: 25px;
}
</style>
