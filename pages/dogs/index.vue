<template>
  <SearchComponent></SearchComponent>
  <ShortOfferComponent></ShortOfferComponent>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const route = useRoute();
</script>

<style scoped lang="scss">
@import "~/assets/main.scss";
</style>
