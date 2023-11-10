<template>
  <div class="container">
    <div class="card" v-for="offer of offerStore.offers">
      <h3 class="card-name">{{ offer.name }}</h3>
      <img :src="offer.main_img" alt="" class="card-image" height="300" />
      <div class="card-details">
        <p>Geschlecht: {{ offer.gender }}</p>
        <p>Alter: {{ offer.age }}</p>
        <div class="card-image-container" v-for="images of offer.add_imgs">
          <img :src="images" alt="" height="100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOfferStore } from "~/stores/offerStore";

const offerStore = useOfferStore();

onMounted(() => {
  offerStore.fetchAllOffers();
});
</script>

<style lang="scss" scoped></style>
