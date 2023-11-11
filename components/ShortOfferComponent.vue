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
            <Icon name="ph:gender-male-bold" color="white" size="30px"></Icon>
          </div>
          <div v-else class="card-details-gender">
            <Icon name="ph:gender-female-bold" color="white" size="30px"></Icon>
          </div>
          <p class="card-details-age">{{ offer.age }} Jahr/e</p>
          <p class="card-details-health">
            {{ offer.health_status }}
          </p>
          <button class="card-button">Mehr anzeigen</button>
          <Icon
            name="teenyicons:paw-solid"
            size="40px"
            class="card-icon"
          ></Icon>
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
NuxtLink {
  display: none;
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
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.card {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
  box-shadow: rgba(26, 101, 26, 0.5) 0px 30px 60px -12px inset,
    rgba(26, 101, 26, 0.288) 0px 18px 36px -18px inset;
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
.card-icon {
  display: none;
}
@media screen and (max-width: 576px) {
  .card-container {
    margin-bottom: 5rem;
  }
  .card-image {
    width: 100%;
    height: 100%;
    max-width: 300px;
    border-radius: 15px 15px 0 0;
    grid-column: 1/-1;
    grid-row: 1/2;
    //verhindert verzerrung
    object-fit: cover;
  }
  .card-details {
    max-width: 300px;
    background-color: $d-green;
    border-radius: 0 0 15px 15px;
    grid-column: 1/-1;
    grid-row: 2/-1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .card-details-gender {
    position: absolute;
    display: block;
    left: 5px;
    top: -35px;
  }
  .card-details-age {
    grid-column: 1/-1;
    grid-row: 2/3;
    justify-self: center;
    align-self: center;
    font-size: 1.2rem;
  }
  .card-details-health {
    grid-column: 1/-1;
    grid-row: 2/3;
    justify-self: center;
    align-self: end;
    font-size: 0.8rem;
    text-align: center;
    margin: 0 0.5rem 0 0.5rem;
  }
  .card-button {
    display: none;
  }
  .card-location {
    position: absolute;
    display: inline-block;
    z-index: 1;
    height: 1.5rem;
    width: auto;
    background-color: $l-green;
    border-radius: 0 15px 0 15px;
    padding: 0 10px 0 10px;
    color: $d-green;
  }
  .card-breed {
    border-radius: 15px 15px 0 0;
    width: 100%;
  }
  .card-icon {
    display: block;
    justify-self: center;
    align-self: center;
    grid-column: 1/-1;
    grid-row: 3/-1;
  }
}
</style>
