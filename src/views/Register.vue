<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import router from "../router";

const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");

const registerUserByEmail = async () => {
  if (password1.value !== password2.value) {
    console.log("Password issue");
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
  } catch (error) {
    console.log(error);
  }
};
const registerUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  console.log(user);
};

function Login() {
  router.push("./Login");
}
</script>

<template>
  <div>
    <h1>The Endless Galaxy Movie Store</h1>
    <h2>Register by email</h2>
    <form @submit.prevent="registerUserByEmail()">
      <input v-model="username" type="text" placeholder="username" /> <br />
      <br />
      <input v-model="email" type="email" placeholder="email" /> <br />
      <br />
      <input v-model="password1" type="password" placeholder="password" /> <br /><br />
      <input v-model="password2" type="password" placeholder="re-enter password" /> <br />
      <br />
      <input type="submit" id="Registerbutton" value="Register" />
    </form>
    <br />
    <input id="Loginbutton" type="button" value="Login" @click="Login()" />
  </div>
</template>

<style>
#Return {
  position: relative;
  width: 125px;
  height: 25px;
}

#Signin {
  position: sticky;
  left: 50.25vw;
  width: 125px;
  height: 25px;
}

div {
  text-align: center;
}

body {
  color: white;
  background-image: url("https://wallpapercave.com/wp/agLijth.jpg");
}

img {
  height: 5vw;
  width: 5vw;
}

#Registerbutton {
  position: relative;
  width: 125px;
  height: 25px;
}
</style>
