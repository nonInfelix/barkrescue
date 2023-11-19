<template>
  <input v-model="email" type="text" />
  <input v-model="password" type="password" />
  <button @click="userStore.signInUser(email, password)">Login</button>
  <button @click="$router.push(`/user/${userStore.user.id}`)">
    mein Bereich
  </button>
  <div>{{ userStore.user.id }}</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";

const userStore = useUserStore();

const email: string = "";
const password: string = "";
</script>

<style scoped></style>
