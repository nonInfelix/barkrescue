<template>
  <div v-if="user" class="container">
    <img :src="user.logo_img" alt="" />
    <h2>{{ user.name }}</h2>
    <p class="street">{{ user.street }} {{ user.street_number }}</p>
    <p class="location">{{ user.zip_code }} {{ user.location }}</p>
    <p class="legal">{{ user.registergericht }} {{ user.registernummer }}</p>
    <p class="mail">{{ user.email }}</p>
  </div>
</template>

<script setup lang="ts">
const user = ref<any>();

onMounted(async () => {
  const { data } = await $fetch<any>("/api/user/me", {
    headers: useRequestHeaders(["cookie"]),
  });
  user.value = data[0];
  console.log(data);
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 1rem;
}
.street {
  grid-row: 2/3;
}
.location {
  grid-row: 3/4;
}
.legal {
  grid-row: 4/5;
}
.mail {
  grid-row: 5/6;
}
.container img {
  justify-self: center;
  align-self: center;
  max-width: 150px;
  grid-row: 1/6;
  grid-column: 2/-1;
}
</style>
