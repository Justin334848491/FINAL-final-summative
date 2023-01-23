<template>
    <h1> Shopping Cart</h1>
    <p> Click items you would like to REMOVE</p>
    <input type="button" id="Return2" value="Back to Mainstore" @click="Return4()">
    <br> <br>
    <div class="objects">
        <img id="picture" @click="deleteItem(option.id)" v-for="option in movieOptions" :src="option.poster" />
    </div>
</template>

<script setup scoped>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from "vue";
import router from '../router';

const index = indexStore()
const { shoppingcart } = storeToRefs(index);

let movieOptions = ref(shoppingcart.value);
let removeItem = ref("false")

function deleteItem(pos) {
    for (let i = 0; i < shoppingcart.value.length; i++) {
        if (shoppingcart.value[i].id === pos) {
            shoppingcart.value.splice(i, 1);
        }

    }
}

function Deletion() {
    removeItem.value = "true"
}

function Return4() {
    router.push("/Mainstore");
}

</script>

<style scoped>
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