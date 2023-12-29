<template>
  <input type="file" @change="onFileChange" />
  <img width="300px" v-if="imageURL" :src="imageURL" alt="Vorschau" />
  <button @click="uploadImage" class="btn">Bild hochladen</button>
</template>

<script setup lang="ts">
const selectedFile = ref();
const imageURL = ref<string>();
const shelterStore = useShelterStore();

function onFileChange(e: any) {
  const files = e.target.files;
  if (files.length > 0) {
    // Dateityp überprüfen
    if (!["image/jpeg", "image/png"].includes(files[0].type)) {
      alert("Nur JPEG- und PNG-Dateien sind erlaubt.");
      return;
    }

    // Dateigröße überprüfen (1024 KB = 1 MB)
    if (files[0].size > 1024 * 1024) {
      alert("Die Datei ist zu groß. Maximal erlaubte Größe ist 1 MB.");
      return;
    }

    selectedFile.value = files[0];
    imageURL.value = URL.createObjectURL(files[0]);
    console.log("selectedFile:  ", selectedFile.value);
  }
}

function uploadImage() {
  let formData = new FormData();
  formData.append("img", selectedFile.value);

  shelterStore.onUploadImage(formData);
}
</script>

<style scoped></style>
