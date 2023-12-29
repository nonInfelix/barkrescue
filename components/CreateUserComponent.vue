<template>
  <div class="container">
    <h2>Registrieren</h2>
    <label for="email">E-Mail</label>
    <input class="signup" v-model="email" type="text" id="email" />
    <label for="password">Passwort</label>
    <input class="signup" v-model="password" type="password" id="password" />
    <h2>Profildaten</h2>
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
const router = useRouter();
const supabase = useSupabaseClient();
const shelterStore = useShelterStore();

const email = ref<string>("noninfelix+test@gmail.com");
const password = ref<string>("test123");

const name = ref<string>("name");
const location = ref<string>("Ort");
const street = ref<string>("Straße");
const streetNumber = ref<string>("99");
const zipCode = ref<number>(99999);
const publicEmail = ref<string>("testmail@temi3x.org");
const register = ref<string>("register");
const registerNumber = ref<string>("register99");

async function signUp(mail: string, pw: string) {
  const shelter = {
    location: location.value,
    street: street.value,
    street_number: streetNumber.value,
    zip_code: zipCode.value,
    email: publicEmail.value,
    registergericht: register.value,
    registernummer: registerNumber.value,
    logo_img: null,
    name: name.value,
  };
  const { data } = await supabase.auth.signUp({
    email: mail,
    password: pw,
  });
  if (data.user !== null) {
    console.log("signup data:  ", data, "supabase:  ", supabase);
    const response = await shelterStore.createShelter(shelter, data.user.id);
    console.log(response);
    router.push("/user/confirm");
  }
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
.signup {
  border-radius: 12px;
  padding-left: 0.5rem;
  width: 300px;
  height: 2rem;
  border: transparent;
  margin-bottom: 0.5rem;
}

h2 {
  margin: 1rem 0 0.5rem 0;
}
.info {
  margin: 0.5rem 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}
.info input {
  border-radius: 12px;
  padding-left: 0.5rem;
  width: 200px;
  height: 2rem;
  border: transparent;
  margin-bottom: 0.5rem;
}
</style>
