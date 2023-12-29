<template>
  <UserComponent></UserComponent>
  <button v-if="editMode == false" @click="toggleEdit" class="btn">
    Daten bearbeiten
  </button>
  <button class="btn">Inserate bearbeiten</button>
  <div v-if="editMode == true">
    <ImageUploadComponent></ImageUploadComponent>
    <UpdateShelterComponent></UpdateShelterComponent>
    <button class="btn">Daten ändern</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
let editMode = ref(false);

function toggleEdit() {
  editMode.value = !editMode.value;
  console.log(editMode);
}
</script>

<style scoped></style>
