<template>
  <div v-for="shelter of shelterStore.shelters">
    <p>{{ shelter.name }}</p>
    <img class="shelter-logo" :src="shelter.logo_img" alt="" />
  </div>
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
.shelter-logo {
  height: 200px;
}
</style>
