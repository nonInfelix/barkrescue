<template>
  <div class="container" v-for="dog of offerStore.currentDog">
    <div class="dog-container">
      <h1>{{ dog.name }}</h1>
      <img class="main-img" :src="dog.main_img" :alt="'Hund ' + dog.name" />
      <p>Alter: {{ dog.age }}</p>
      <p v-if="dog.gender == 'male'">Geschlecht: männlich</p>
      <p v-else-if="dog.gender == 'female'">Geschlecht: weiblich</p>
      <p>Gesundheitsstatus: {{ dog.health_status }}</p>
      <p>{{ dog.description }}</p>
    </div>
    <div class="breed-container">
      <h2>Rasseportrait</h2>
      <img :src="breed.img" alt="" />
      <p>Rasse: {{ breed.name }}</p>
      <h3>körperliche Merkmale</h3>
      <p>Größenzuordnung: {{ breed.category }}</p>
      <p>Gewicht: {{ breed.weight }}</p>
      <p>Größe: {{ breed.size }}</p>
      <p>Farben: {{ breed.color }}</p>
      <p>Lebenserwartung: {{ breed.lifespan }}</p>
      <h3>persönliche Merkmale</h3>
      <p>Charakter: {{ breed.character }}</p>
      <p>Rolle: {{ breed.role }}</p>
      <h3>andere Merkmale</h3>
      <p>Ursprung: {{ breed.origin_country }}</p>
      <p>Eingruppierung: {{ breed.section }}</p>
      <p>FCI-Gruppe: {{ breed.fci_group }}</p>
    </div>
    <NuxtLink :to="`/shelters/${shelter.id}`" style="text-decoration: none">
      <div class="shelter-container">
        <h2>Info zum Tierheim</h2>
        <p>{{ shelter.name }}</p>
        <img class="shelter-logo" :src="shelter.logo_img" alt="" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useOfferStore } from "~/stores/offerStore";

const offerStore = useOfferStore();

const route = useRoute();
const dogId = route.params.id as string;
const breed = computed(() => offerStore.currentDog[0]?.dogs);
const shelter = computed(() => offerStore.currentDog[0]?.shelters);

onMounted(() => {
  offerStore.fetchByID(dogId);
});
</script>

<style lang="scss" scoped>
.main-img {
  height: 300px;
}
.shelter-logo {
  height: 150px;
}
</style>
