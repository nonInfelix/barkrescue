<template>
  <input v-model="email" type="text" />
  <input v-model="password" type="password" />
  <button @click="login(email, password)">Login</button>
  <button @click="$router.push(`/user/account`)">mein Bereich</button>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const email = ref<string>("");
const password = ref<string>("");

async function login(mail: string, pw: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: mail,
    password: pw,
  });
  if (error) console.log(error);
  console.log("login data: ", data);
}
</script>

<style scoped></style>
