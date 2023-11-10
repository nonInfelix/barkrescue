<template>
  <div class="searchbox">
    <select v-model="selectedBreed" class="searchbox-breed">
      <option v-for="breed in breeds" :value="breed.value">
        {{ breed.text }}
      </option>
    </select>

    <select v-model="dogAge" class="searchbox-age">
      <!--ALter unter value-->
      <option disabled value="">Alter</option>
      <option value="1">&lt; 1 Jahr</option>
      <option value="4">1-3 Jahre</option>
      <option value="8">4-7 Jahre</option>
      <option value="99">7+ Jahre</option>
    </select>

    <div class="searchbox-gender">
      <input type="radio" id="female" value="female" v-model="dogGender" />
      <label for="female">weiblich</label>
      <input type="radio" id="male" value="male" v-model="dogGender" />
      <label for="male">männlich</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDogStore } from "~/stores/dogStore";
const dogStore = useDogStore();

const dogGender = ref<string | null>(null);
const dogAge = ref<number | null>(null);
const selectedBreed = ref<string | null>(null);

const breeds = computed(() => {
  if (dogStore.dogSearch !== null) {
    return [
      { text: "Alle Rassen", value: "all" },
      ...dogStore.dogSearch.sort((a, b) => a.text.localeCompare(b.text)),
    ];
  } else {
    return [{ text: "Alle Rassen", value: "all" }];
  }
});

onMounted(() => {
  dogStore.fetchDogs();
});
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
* {
  font-family: Poppins, sans-serif;
}
.searchbox-breed {
  grid-row: 2/2;
  grid-column: 1/7;
  border-radius: 8px;
  border: transparent;
  width: 10rem;
  height: 2rem;
  justify-self: end;
  cursor: pointer;
  background-color: white;
  color: rgb(150, 150, 150);
}
.searchbox-age {
  grid-row: 2/2;
  grid-column: 7/-1;
  border-radius: 8px;
  border: transparent;
  width: 10rem;
  height: 2rem;
  justify-self: start;
  cursor: pointer;
  background-color: white;
  color: rgb(150, 150, 150);
}
.searchbox-gender {
  grid-row: 3/3;
  grid-column: 1/-1;
  justify-self: center;
  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  label {
    display: inline-block;
    background-color: #ffffff;
    padding: 0.5rem 1rem;
    font-family: Poppins, sans-serif;
    font-size: 0.9rem;
    border: transparent;
    border-radius: 8px;
    margin: 0 0.5rem 0 0.5rem;
    cursor: pointer;
  }
}
input[type="radio"]:checked + label {
  background-color: $d-green;
  color: white;
}
</style>
