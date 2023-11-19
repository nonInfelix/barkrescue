<template>
  <header>
    <NuxtLink :to="`/`" display="none">
      <img src="../assets/dog-logo.png" alt="logo-dog" />
    </NuxtLink>
    <h1>BarkRescue</h1>
    <button @click="$router.push('/user/signup')">Registrierung</button>
  </header>
</template>
<style lang="scss" scoped>
@import "~/assets/main.scss";

header {
  display: grid;
  background-color: $d-green;
  height: 5rem;
  position: relative;
  grid-template-columns: 1fr 1fr;
  img {
    grid-column: 1/1;
    position: absolute;
    max-height: 70px;
    align-self: center;
  }
  h1 {
    position: absolute;
    align-self: center;
    left: 60px;
    grid-column: 1/1;
    color: white;
    font-size: 1.7rem;
  }
  button {
    font-size: 1rem;
    height: 2.5rem;
    width: 8rem;
    grid-column: 2/2;
    align-self: center;
    justify-self: end;
    margin-right: 10px;
    background-color: $s-green;
    border-color: transparent;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    text-align: center;
  }
}
</style>
