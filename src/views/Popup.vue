<template>
    <h1> ERROR PAGE</h1>
    <input type="button" id="Return2" value="Back" @click="Return2()">
    <br> <br>
    <p> This is an error. The password or username used isn't recognised on the MD5# system as an authorised user.
        Please make sure to check the password and username used and try again.</p>
    <br> <br> <br> <br> <br> <br>
    <p> ERROR CODE #69420</p>


</template>

<script setup>
import router from '../router';

function Return2() {
    router.push("./Login");
}
</script>

<style scoped>
#Return2 {
    position: relative;
    width: 125px;
    height: 25px;
}

p {
    font-size: 30px;
}
</style>