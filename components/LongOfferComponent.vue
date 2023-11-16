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
      <h2 class="breed-header">Rasseportrait</h2>
      <img class="breed-img" :src="breed.img" alt="" />
      <h3>Allgemeine Informationen</h3>
      <table>
        <tbody>
          <tr>
            <th>Rasse</th>
            <td>{{ breed.name }}</td>
          </tr>
          <tr>
            <th>Größenzuordnung</th>
            <td>{{ breed.category }}</td>
          </tr>
          <tr>
            <th>Gewicht</th>
            <td>{{ breed.weight }}</td>
          </tr>
          <tr>
            <th>Größe</th>
            <td>{{ breed.size }}</td>
          </tr>
          <tr>
            <th>Farben</th>
            <td>{{ breed.color }}</td>
          </tr>
          <tr>
            <th>Lebenserwartung</th>
            <td>{{ breed.lifespan }}</td>
          </tr>
        </tbody>
      </table>

      <h3>Persönliche Merkmale</h3>
      <table>
        <tbody>
          <tr>
            <th>Charakter</th>
            <td>{{ breed.character }}</td>
          </tr>
          <tr>
            <th>Rolle</th>
            <td>{{ breed.role }}</td>
          </tr>
        </tbody>
      </table>

      <h3>Andere Merkmale</h3>
      <table>
        <tbody>
          <tr>
            <th>Ursprung</th>
            <td>{{ breed.origin_country }}</td>
          </tr>
          <tr>
            <th>Eingruppierung</th>
            <td>{{ breed.section }}</td>
          </tr>
          <tr>
            <th>FCI-Gruppe</th>
            <td>{{ breed.fci_group }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <NuxtLink :to="`/shelter/${shelter.id}`" style="text-decoration: none">
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
  width: 100%;
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
  background-color: white;
  border-radius: 30px;
  padding: 3px 10px 3px 10px;
  margin: 0 0.5rem 1rem 0.5rem;
}
.dog-gender {
  background-color: white;
  border-radius: 30px;
  padding: 3px 10px 3px 10px;
  margin: 0 0.5rem 1rem 0.5rem;
}
.dog-health {
  background-color: white;
  border-radius: 30px;
  padding: 3px 10px 3px 10px;
  margin: 0 0.5rem 1rem 0.5rem;
}
.dog-shelter {
  background-color: white;
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
.breed-container {
  width: 100%;
  border-radius: 15px;
  border-color: $d-green;
  padding: 0.5rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  border: 2px solid grey;
  margin-bottom: 1rem;
}
.breed-img {
  margin-bottom: 1rem;
  justify-self: center;
  height: 250px;
  width: 100%;
  object-fit: cover;
  border: transparent;
  clip-path: circle();
}
.breed-header {
  justify-self: center;
  font-size: 2rem;
}
table {
  margin-bottom: 20px;
  width: 100%;
  font-family: Poppins, sans-serif;
  border-collapse: collapse;
  table-layout: fixed; /* Feste Tabellenbreite */
}

th {
  text-align: left;
  background-color: #f2f2f2;
  padding: 8px;
  width: 170px;
  word-wrap: break-word; /* Erlaubt das Umbruch von Wörtern in der Zelle */
  overflow-wrap: break-word;
}

td {
  text-align: left;
  padding: 8px;
  word-wrap: break-word; /* Erlaubt das Umbruch von Wörtern in der Zelle */
  overflow-wrap: break-word;
}

/* Styling für Tabellenzeilen */
tr:nth-child(even) {
  background-color: #f9f9f9; /* Hintergrundfarbe für jede zweite Zeile */
}

tr:hover {
  background-color: #ddd;
}
.shelter-container {
  display: grid;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  gap: 0.2rem;
}
.shelter-container h3 {
  font-size: 2rem;
}

.shelter-logo {
  width: 150px;
  justify-self: center;
}
</style>
