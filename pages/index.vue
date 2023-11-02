<template>
  <main class="container">
    <h2 class="main-text">
      Finden Sie Ihr perfektes Familienmitglied auf vier Pfoten
    </h2>
    <div class="button-container">
      <button class="btn">Hund adoptieren</button>
      <button class="btn">Hund freigeben</button>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";

main.container {
  display: grid;
  grid-template-rows: 25% 40% 30%;
  justify-content: center;
  justify-items: center;
  height: 300px;
  background-image: linear-gradient(
      to top,
      white,
      transparent 20%,
      transparent 70%,
      $d-green
    ),
    url("~/assets/img/dogs-header.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
.main-text {
  grid-row: 1/1;
  align-self: center;
  font-weight: 900;
  color: white;
  text-align: center;
}
.button-container {
  grid-row: 3/3;
  justify-self: center;
  align-self: end;
  margin-bottom: 10px;
}
</style>
