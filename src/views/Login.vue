<script>
import router from "../router";
import Popup from "../components/Popup.vue";
import { ref } from "vue";
import { auth } from "../firebase/index.js";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";

const provider = new GoogleAuthProvider();
const username = ref("");
const password = ref("");

let displayPopup = ref(false)

function checkLogin() {
  signInWithEmailAndPassword(auth, username.value.value, password.value.value)
    .then((userCredential) => {
      const user = userCredential.user;
      router.push('/mainstore');
    })
    .catch((error) => {
      showError.value = true;
    });
}
function checkGoogleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      router.push('/mainstore');

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

// function checkLogin() {
//   signInWithEmailAndPassword(auth, username.value.value, password.value.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       router.push("/Mainstore");
//     })
//     .catch((error) => {
//       displayPopup.value = true;
//     });
// }
// function checkGoogleLogin() {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       router.push("/Mainstore");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.customData.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);
//     });
// }
</script>

<template>
  <div id="backgroundImage"></div>
  <h1>The Endless Galaxy Movie Store</h1>
  <form @submit.prevent="checkLogin()" id="loginContainer">
    <label class="loginLabel">Username:</label>
    <br />
    <input type="email" ref="username" placeholder="Email" class="userInput" />
    <br />
    <label class="loginLabel">Password:</label>
    <br />
    <input type="password" ref="password" placeholder="Password" class="userInput" />
    <br />
    <input type="submit" value="Login" @click="checkLogin()" id="LoginButton" />
    <br />
  </form>
  <br />
  <input id="LoginButton" type="button" value="MainMenu" @click="mainPage()" />
  <br />
  <br />
  <img src="https://services.google.com/fh/files/misc/google_g_icon_download.png" @click="checkGoogleLogin()" />
  <label class="loginLabel">Username:</label>
  <br />
  <Popup id="Popup" v-if="displayPopup" />

</template>

<style scoped>
.loginLabel {
  font-size: 20px;
}

#LoginButton {
  position: relative;
  width: 125px;
  height: 25px;
}

#Popup {
  position: absolute;
  bottom: 15px;
  right: 20px;
  height: 60px;
}
</style>        
