<template>
  <div class="container-small">
    <h2>Foto hochladen</h2>
    <input type="file" id="file" class="file-input" @change="onFileChange" />
    <label for="file" class="file-label">Datei wählen...</label>

    <img width="250px" v-if="imageURL" :src="imageURL" alt="Vorschau" />
    <p v-if="isUploading == true">Wird hochgeladen...</p>
    <p v-if="isUploading == false && uploadSuccess == true">
      Erfolgreich hochgeladen
    </p>
    <p v-if="isError == true">Fehler beim Hochladen</p>
    <button
      v-if="selectedFile && uploadSuccess == false"
      @click="uploadImage"
      class="btn"
    >
      Bild hochladen
    </button>
  </div>
</template>

<script setup lang="ts">
const selectedFile = ref();
const imageURL = ref<string>();
const shelterStore = useShelterStore();
const isUploading = ref(false);
const uploadSuccess = ref(false);
const isError = ref(false);

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

async function uploadImage() {
  let formData = new FormData();
  formData.append("img", selectedFile.value);

  isUploading.value = true;
  uploadSuccess.value = false;

  try {
    const res = await shelterStore.onUploadImage(formData);
    console.log(res);
    uploadSuccess.value = true;
  } catch (error) {
    console.error("Fehler beim Hochladen: ", error);
    isError.value = true;
  } finally {
    isUploading.value = false;
  }
}
</script>

<style scoped lang="scss">
@import "~/assets/main.scss";

.container-small {
  margin-top: 1rem;
  padding: 0.2rem 5rem 0.2rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: $l-green;
}
h2 {
  margin-bottom: 1rem;
}
p {
  margin: auto;
}
img {
  margin: 0.5rem auto;
  border-radius: 6px;
}
.file-input {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
  z-index: -1;
}

.file-label {
  margin: auto;
  display: inline-block;
  padding: 0.6rem 1rem;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.file-label:hover {
  background-color: #e2e6ea;
}
</style>
