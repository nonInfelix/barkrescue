<template>
  <input v-model="email" type="text" />
  <input v-model="password" type="password" />
  <button @click="userStore.signInUser(email, password)">Login</button>
  <button @click="$router.push(`/user/account`)">mein Bereich</button>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";

const userStore = useUserStore();

const email: string = "felixvolkmer.business@gmail.com";
const password: string = "password";
</script>

<style scoped></style>
