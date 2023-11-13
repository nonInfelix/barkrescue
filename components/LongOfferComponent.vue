<template>
  <div class="container" v-for="dog of offerStore.currentDog">
    <main class="dog-container">
      <h1>{{ dog.name }}</h1>
      <img class="main-img" :src="dog.main_img" :alt="'Hund ' + dog.name" />
      <div class="dog-badges">
        <p class="dog-age">{{ dog.age }} Jahr/e</p>
        <p class="dog-gender" v-if="dog.gender == 'male'">männlich</p>
        <p class="dog-gender" v-else-if="dog.gender == 'female'">weiblich</p>
        <p class="dog-shelter">{{ shelter.location }}</p>
        <p class="dog-health">{{ dog.health_status }}</p>
      </div>
      <h2 class="description-header">Beschreibung</h2>
      <p class="dog-description">{{ dog.description }}</p>
      <button class="dog-button">Jetzt anfragen</button>
    </main>
    <section class="breed-container">
      <h2>Rasseportrait</h2>
      <img :src="breed.img" alt="" />
      <article>
        <h3>körperliche Merkmale</h3>
        <p>Rasse: {{ breed.name }}</p>
        <p>Größenzuordnung: {{ breed.category }}</p>
        <p>Gewicht: {{ breed.weight }}</p>
        <p>Größe: {{ breed.size }}</p>
        <p>Farben: {{ breed.color }}</p>
        <p>Lebenserwartung: {{ breed.lifespan }}</p>
      </article>
      <article>
        <h3>persönliche Merkmale</h3>
        <p>Charakter: {{ breed.character }}</p>
        <p>Rolle: {{ breed.role }}</p>
      </article>
      <article>
        <h3>andere Merkmale</h3>
        <p>Ursprung: {{ breed.origin_country }}</p>
        <p>Eingruppierung: {{ breed.section }}</p>
        <p>FCI-Gruppe: {{ breed.fci_group }}</p>
      </article>
    </section>
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
@import "~/assets/main.scss";

* {
  color: rgb(65, 65, 65);
}
h1 {
  color: white;
  margin-top: -30px;
  text-align: center;
  font-size: 3rem;
  transform: translateY(23px);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.dog-container {
  border: 3px solid $l-green;
  background-color: $d-green;
  border-radius: 15px;
  padding: 0 0.5rem 0.5rem 0.5rem;
  position: relative;
  display: grid;
  flex-direction: column;
  margin-bottom: 2rem;
}
.main-img {
  margin-bottom: 1rem;
  justify-self: center;
  height: 250px;
  object-fit: cover;
  border: transparent;
  border-radius: 15px;
}
.dog-badges {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.dog-age {
  background-color: rgb(245, 231, 245);
  border: 1px solid rgb(255, 164, 255);
  border-radius: 30px;
  padding: 3px 10px 3px 10px;
  margin: 0 0.5rem 1rem 0.5rem;
}
.dog-gender {
  background-color: rgb(227, 227, 245);
  border: 1px solid rgb(148, 148, 255);
  border-radius: 30px;
  padding: 3px 10px 3px 10px;
  margin: 0 0.5rem 1rem 0.5rem;
}
.dog-health {
  background-color: rgb(230, 255, 230);
  border: 1px solid rgb(69, 146, 69);
  border-radius: 30px;
  padding: 3px 10px 3px 10px;
  margin: 0 0.5rem 1rem 0.5rem;
}
.dog-shelter {
  background-color: rgb(255, 210, 210);
  border: 1px solid rgb(255, 163, 163);
  border-radius: 30px;
  padding: 3px 10px 3px 10px;
  margin: 0 0.5rem 1rem 0.5rem;
}
.dog-description {
  border: 1px solid $l-green;
  padding: 0.1rem 0.8rem 0.8rem 0.8rem;
  border-radius: 15px;
  color: white;
}
.description-header {
  text-align: center;
  margin-top: 1rem;
  color: white;
}
.dog-button {
  color: $d-green;
  background-color: $s-green;
  margin: 1rem 1rem 0.5rem 1rem;
  border: transparent;
  border-radius: 12px;
  justify-self: center;
  padding: 0.5rem 1.5rem;
  font-family: Poppins;
  font-size: 1.2rem;
  cursor: pointer;
}
.shelter-logo {
  height: 150px;
}
</style>
