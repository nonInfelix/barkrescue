<template>
  <footer>
    <p>Felix Volkmer</p>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "~/assets/main.scss";

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: $d-green;

  p {
    color: white;
  }
}
</style>
