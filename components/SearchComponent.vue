<template>
  <div class="searchbox">
    <input
      placeholder="Stadt"
      id="city"
      name="city"
      type="text"
      class="searchbox-city"
      v-model="city"
    />
    <button @click="getDogs" class="btn searchbox-button">Hund suchen</button>
  </div>
</template>

<script setup lang="ts">
import { useOfferStore } from "~/stores/offerStore";

const offerStore = useOfferStore();

const page = ref<number>(1);
const city = ref<string>("köln");

function getDogs() {
  offerStore.fetchByCity(city.value.toLowerCase());
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
}
.searchbox-city {
  border-radius: 12px;
  padding-left: 0.5rem;
  width: 300px;
  height: 2rem;
  border: transparent;
  align-self: end;
}

.searchbox-button {
  color: $s-green;
  border: 1px solid $s-green;
}
</style>
