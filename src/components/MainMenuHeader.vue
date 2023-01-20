<template>
    <h1>The Endless Galaxy Movie Store</h1>
    <input id="loginbutton" type="button" value="login" @click="login()">
  
</template>

<script setup>
import router from "../router/index.js"; 

    function login() {
        router.push("./login")
    }

</script>

<style>

h1 {
    text-align: center;
}

#loginbutton{
    position: relative;
    width: 125px;
    height: 25px;
}


</style>