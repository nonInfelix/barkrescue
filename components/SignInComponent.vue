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

const user = useSupabaseUser();

async function signInUser() {
  const { data } = await useFetch(`/api/user/signIn`, {
    method: "POST",
    body: { email: email, password: password },
  });
  console.log("login-data:  ", data);
}
async function getUserData() {
  const { data, error } = await useFetch("/api/me", {
    headers: useRequestHeaders(["cookie"]),
  });
  console.log("USER-data: ", data, "USER-error :", error);
}
</script>

<style scoped></style>
