<template>
  <main class="container">
    <div class="shelter" v-for="shelter of shelterStore.shelters">
      <h2>{{ shelter.name }}</h2>
      <p class="shelter-street">
        {{ shelter.street }} {{ shelter.street_number }}
      </p>
      <p class="shelter-location">
        {{ shelter.zip_code }} {{ shelter.location }}
      </p>
      <p class="shelter-register">
        {{ shelter.registergericht }}: {{ shelter.registernummer }}
      </p>
      <NuxtImg
        class="shelter-logo"
        :src="shelter.logo_img"
        alt=""
        placeholder
      />
    </div>
    <h3 class="dog-header">Unsere Hunde</h3>
    <section class="dog-container">
      <article class="dog" v-for="dog of shelterStore.dogs">
        <NuxtLink :to="`/dogs/${dog.id}`">
          <NuxtImg class="dog-img" :src="dog.main_img"></NuxtImg>
          <p class="dog-name">{{ dog.name }}</p>
        </NuxtLink>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useShelterStore } from "~/stores/shelterStore";

const shelterStore = useShelterStore();
const route = useRoute();
const shelterID = route.params.id as string;

onMounted(() => {
  shelterStore.fetchShelter(shelterID);
});
</script>

<style scoped>
@import "~/assets/main.scss";

NuxtLink {
  display: none;
}
.shelter {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr repeat(3, 1.5rem);
  align-items: end;
  gap: 0 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.shelter h2 {
  align-self: start;
  grid-row: 1/2;
}
.shelter p {
  grid-column: 1/2;
}
.shelter-street {
  grid-row: 2/3;
}
.shelter-location {
  grid-row: 3/4;
}
.shelter-register {
  grid-row: 4/5;
}
.shelter-logo {
  grid-row: 1/-1;
  grid-column: 2/3;
  align-self: start;
  height: auto;
  width: 100%;
}
.dog-header {
  text-align: center;
  margin-bottom: 0.5rem;
}
.dog-container {
  display: grid;
  gap: 0.5rem 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}
.dog {
  position: relative;
  padding-top: 100%;
}

.dog-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Verhindert Verzerrungen */
  border-radius: 6px;
  transition: 0.9s ease;
  -webkit-filter: grayscale(0.8);
  filter: grayscale(0.8);
}
.dog-img:hover {
  z-index: 1;
  transform: scale(1.05);
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}
.dog-name {
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 5px;
  color: white;
}
</style>
