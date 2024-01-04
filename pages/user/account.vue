<template>
  <div class="container">
    <UserComponent></UserComponent>
    <div class="btn-container">
      <button v-if="editMode == false" @click="toggleEdit">
        Daten bearbeiten
      </button>
      <button>Inserate bearbeiten</button>
    </div>
    <div v-if="editMode == true">
      <ImageUploadComponent></ImageUploadComponent>
      <UpdateShelterComponent></UpdateShelterComponent>
      <button>Daten ändern</button>
    </div>
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

<style scoped lang="scss">
@import "~/assets/main.scss";

button {
  margin-right: 1rem;
  background-color: $d-green;
  border-color: transparent;
  border-radius: 6px;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: Poppins, sans-serif;
}

.btn-container {
  display: flex;
  justify-content: center;
}
</style>
