<template>
  <div class="searchbox">
    <input
      placeholder="Stadt suchen..."
      id="city"
      name="city"
      type="text"
      class="searchbox-city"
      v-model="city"
    />
    <button @click="getDogs" class="searchbox-button">Hund suchen</button>
  </div>
</template>

<script setup lang="ts">
import { useOfferStore } from "~/stores/offerStore";

const offerStore = useOfferStore();

const page = ref<number>(1);
const city = ref<string>("");

function getDogs() {
  offerStore.fetchByCity(city.value.toLowerCase());
  city.value = "";
}
</script>

<style scoped lang="scss">
@import "~/assets/main.scss";
* {
  font-family: Poppins, sans-serif;
}
.searchbox {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $l-green;
  height: 5vh;
  padding: 2rem 0;
}
.searchbox-city {
  border-radius: 12px 0 0 12px;
  padding-left: 0.5rem;
  width: 300px;
  height: 2rem;
  border: transparent;
}
.searchbox-city:focus {
  outline: none;
  border: none;
}

.searchbox-button {
  color: $s-green;
  border-radius: 0 12px 12px 0;
  cursor: pointer;
  background-color: $d-green;
  border-color: transparent;
  height: 2rem;
  padding: 0 0.3rem 0 0.3rem;
}
</style>
