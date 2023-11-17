<template>
  <input v-model="email" type="text" />
  <input v-model="password" type="text" />
  <button @click="userStore.createUser(email, password)">Registrieren</button>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";

const userStore = useUserStore();

const email: string = "";
const password: string = "";
</script>

<style scoped></style>
