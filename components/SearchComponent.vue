<template>
  <div class="container searchbox">
    <select v-model="selectedBreed">
      <option v-for="breed in breeds" :value="breed.value">
        {{ breed.text }}
      </option>
    </select>

    <input placeholder="Stadt" id="city" name="city" type="text" />

    <select v-model="dogAge">
      <!--ALter unter value-->
      <option disabled value="">Alter</option>
      <option value="1">&lt; 1 Jahr</option>
      <option value="4">1-3 Jahre</option>
      <option value="8">4-7 Jahre</option>
      <option value="99">7+ Jahre</option>
    </select>

    <div class="dog-gender">
      <input type="radio" id="female" value="female" v-model="dogGender" />
      <label for="female">weiblich</label>
      <input type="radio" id="male" value="male" v-model="dogGender" />
      <label for="male">männlich</label>
    </div>
  </div>
</template>

<script setup lang="ts">
const page = ref(1);
const dogGender = ref("");
const dogAge = ref("");

const selectedBreed = ref("all");
//über store fetchen
const breeds = ref([
  { text: "Alle Rassen", value: "all" },
  { text: "One", value: "A" },
  { text: "Two", value: "B" },
  { text: "Three", value: "C" },
]);
</script>

<style scoped lang="scss">
@import "~/assets/main.scss";
</style>
