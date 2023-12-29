<template>
  <div class="container">
    <label for="name">Name</label>
    <input v-model="name" type="text" id="name" />
    <label for="location">Ort</label>
    <input v-model="location" type="text" id="location" />
    <label for="street">Straße</label>
    <input v-model="street" type="text" id="street" />
    <label for="streetNumber">Nummer</label>
    <input v-model="streetNumber" type="text" id="streetNumber" />
    <label for="zipCode">Postleitzahl</label>
    <input v-model="zipCode" type="text" id="zipCode" />
    <label for="publicEmail">öffentliche E-Mail</label>
    <input v-model="publicEmail" type="text" id="publicEmail" />
    <label for="register">Registergericht</label>
    <input v-model="register" type="text" id="register" />
    <label for="registerNumber">Registernummer</label>
    <input v-model="registerNumber" type="text" id="registerNumber" />
  </div>
</template>

<script setup lang="ts">
const shelterStore = useShelterStore();

const name = ref<string>("");
const location = ref<string>("");
const street = ref<string>("");
const streetNumber = ref<string>("");
const zipCode = ref<number>();
const publicEmail = ref<string>("");
const register = ref<string>("");
const registerNumber = ref<string>("");
</script>

<style scoped></style>
