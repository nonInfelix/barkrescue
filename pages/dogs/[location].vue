<template>
  <SearchComponent></SearchComponent>
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
