<template>
  <div class="container">
    <label for="email">E-Mail</label>
    <input v-model="email" type="text" id="email" />
    <label for="password">Passwort</label>
    <input v-model="password" type="password" id="password" />
    <div class="info">
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
    <button class="btn" @click="signUp(email, password)">Registrieren</button>
  </div>
</template>

<script setup lang="ts">
import { type Shelter } from "../stores/shelterStore";
const supabase = useSupabaseClient();
const shelterStore = useShelterStore();

const email = ref<string>("");
const password = ref<string>("");

const name = ref<string>("");
const location = ref<string>("");
const street = ref<string>("");
const streetNumber = ref<string>("");
const zipCode = ref<number>(99999);
const publicEmail = ref<string>("");
const register = ref<string>("");
const registerNumber = ref<string>("");

async function signUp(mail: string, pw: string) {
  const shelter: Shelter = {
    id: null,
    created_at: null,
    location: location.value,
    street: street.value,
    street_number: streetNumber.value,
    zip_code: zipCode.value,
    email: publicEmail.value,
    registergericht: register.value,
    registernummer: registerNumber.value,
    logo_img: null,
    name: name.value,
    shelter_dogs: null,
    user_id: null,
  };

  const { data } = await supabase.auth.signUp({
    email: mail,
    password: pw,
  });
  console.log("signup data:  ", data, "supabase:  ", supabase);
  shelter.user_id = data.user?.id;
  const response = await shelterStore.createShelter(shelter);
  console.log(response);
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
