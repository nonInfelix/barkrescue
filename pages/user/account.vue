<template>
  <h1>mein Account</h1>
  <div>{{ userData }}</div>
</template>

<script setup lang="ts">
const userData = ref<any>();

async function getUserData() {
  const { data, error } = await useFetch("/api/user/userData", {
    headers: useRequestHeaders(["cookie"]),
  });
  console.log("data: ", data, "error :", error);
  userData.value = data;
}

onMounted(() => {
  getUserData();
});
</script>

<style scoped></style>
