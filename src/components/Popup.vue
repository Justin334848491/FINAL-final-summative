<template>
  <div id="backgroundModal">
      <div id="myModal" class="modal">
        <div id="modalContent">
        <p> This is an error code. Please check your password and username and try again!</p>
        </div>
      </div>
  </div>
</template>

<script setup>

window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
    backgroundModal.value.style.display = "none";
  }
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

#backgroundModal {
  z-index: 100000000000000;
}

.modal {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.65);
}
#backgroundModal .close:hover

#modalContent {
  opacity: 100%;
  position: absolute;
  left: 8.75vw;
  top: 6.5vw;
  padding: 20px;
  border: 1px solid #888;
  width: 80vw;
  height: 38vw;
}
</style>