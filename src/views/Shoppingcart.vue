<template>
    <h1> Shopping Cart</h1>
    <input type="button" id="Return2" value="Back to Mainstore" @click="Return4()">
    <input type="button" id="deletion" value="Remove Item" @click="Deletion()">
    <br> <br>
    <div class="objects">

        <img id="picture" @click="testFunction(option.position)" v-for="option in movieOptions" :src="option.poster" />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from "vue";
import router from '../router';

const index = indexStore()
const { shoppingcart } = storeToRefs(index);
let movieOptions = ref(shoppingcart.value);
let removeItem = ref("false")

function testFunction(slot) {
    console.log(slot)
    if (removeItem.value === "true") {
        index.removeMovieItem(slot);
        removeItem.value = "false";
        console.log(shoppingcart.value);
        movieOptions.value = shoppingcart.value
    }
}

function Deletion() {
    removeItem.value = "true"
}

function Return4() {
    router.push("/Mainstore");
}

function test() {
    console.log(movieOptions.value)
}

</script>

<style>
.objects {
    display: grid;
    align-self: center;
    grid-template-columns: 15vw 15vw 15vw 15vw 15vw;
    grid-template-rows: 12vw 12vw 12vw 12vw;
    column-gap: 5vw;
    row-gap: 10vw;
    width: 10vw;
    height: 15vw;
    position: relative;
    left: 2vw;
}

#picture {
    width: 15vw;
    height: 20vw;
}
</style>