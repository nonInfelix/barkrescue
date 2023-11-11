<template>
  <h2 class="offer-location">
    Aktuelle Hunde in: {{ offerStore.currentLocation.toLocaleUpperCase() }}
  </h2>
  <div class="container">
    <div class="card-container" v-for="offer of offerStore.offers">
      <div class="card">
        <div class="card-breed">
          {{ offer.dogs.name }}
        </div>
        <div class="card-location">
          {{ offer.shelters.location }}
        </div>
        <img :src="offer.main_img" alt="" class="card-image" />
        <div class="card-details">
          <h3 class="card-details-name">{{ offer.name }}</h3>
          <div v-if="offer.gender == 'male'" class="card-details-gender">
            <p>Rüde</p>
            <Icon name="ph:gender-male-bold" color="white" size="30px"></Icon>
          </div>
          <div v-else class="card-details-gender">
            <p>Hündin</p>
            <Icon name="ph:gender-female-bold" color="white" size="30px"></Icon>
          </div>
          <p class="card-details-age">{{ offer.age }} Jahr/e</p>
          <p class="card-details-health">
            {{ offer.health_status }}
          </p>
          <button class="card-button">Mehr anzeigen</button>
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

<style lang="scss" scoped>
@import "~/assets/main.scss";
$font-color: rgb(255, 255, 255);
* {
  font-family: Poppins, sans-serif;
  color: $font-color;
}
.offer-location {
  margin-top: 1.5rem;
  font-family: Poppins, sans-serif;
  color: rgb(51, 51, 51);
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-container {
  max-width: 800px;
  max-height: 350px;
  margin: 1rem 1rem 2rem 1rem;
  border-radius: 15px;
  border: 1px solid $font-color;
}
.card {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.card-breed {
  width: 50%;
  position: absolute;
  padding-left: 10px;
  background-color: rgba(48, 48, 48, 0.664);
  border-radius: 15px 0 0 0;
}
.card-location {
  position: absolute;
  background-color: $l-green;
  left: 0;
  bottom: 0;
  border-radius: 0 15px 0 15px;
  padding: 0 10px 0 10px;
  color: $d-green;
}
.card-image {
  width: 100%;
  height: 100%;
  max-height: 350px;
  border-radius: 15px 0 0 15px;
  grid-column: 1/1;
  grid-row: 1/-1;
  //verhindert verzerrung
  object-fit: cover;
}
.card-details {
  max-height: 350px;
  background-color: $d-green;
  border-radius: 0 15px 15px 0;
  grid-column: 2/-1;
  grid-row: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 5px;
}
.card-details-name {
  grid-column: 1/-1;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  font-size: 2rem;
  color: white;
  border: 2px solid $l-green;
  padding: 0.1rem 1rem;
  margin-top: 10px;
}
.card-details-gender {
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: center;
  align-self: center;
  display: flex;
  font-size: 1.2rem;
}
.card-details-age {
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: center;
  align-self: center;
  font-size: 1.2rem;
}
.card-details-health {
  grid-column: 1/-1;
  grid-row: 3/4;
  justify-self: center;
  align-self: start;
  font-size: 1.2rem;
  text-align: center;
  margin: 0 0.5rem 0 0.5rem;
}
.card-button {
  font-size: 1rem;
  grid-column: 1/-1;
  grid-row: 4/5;
  width: 10rem;
  height: 2.5rem;
  color: $d-green;
  background-color: white;
  border-color: transparent;
  border-radius: 12px;
  align-self: center;
  justify-self: center;
  cursor: pointer;
}
</style>
