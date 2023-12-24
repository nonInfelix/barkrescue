<template>
  <div class="container">
    <label for="email">E-Mail</label>
    <input v-model="email" type="text" id="email" />
    <label for="password">Passwort</label>
    <input v-model="password" type="password" id="password" />
    <button class="btn" @click="signUp(email, password)">Registrieren</button>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const email = ref<string>("");
const password = ref<string>("");

async function signUp(mail: string, pw: string) {
  const { data, error } = await supabase.auth.signUp({
    email: mail,
    password: pw,
  });
  console.log("signup data:  ", data, "supabase:  ", supabase);
}
</script>

<style scoped lang="scss">
@import "~/assets/main.scss";
.container {
  height: 91vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $l-green;
}
.container input {
  border-radius: 12px;
  padding-left: 0.5rem;
  width: 300px;
  height: 2rem;
  border: transparent;
  margin-bottom: 0.5rem;
}
</style>
