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
  <article class="container arguments">
    <h2 class="argument-question">Wieso BarkRescue?</h2>
    <section class="s-1">
      <h3>Rettung eines Lebens</h3>
      <p>
        Durch die Adoption aus einem Tierheim erhalten Sie die Möglichkeit,
        einem Tier ein neues Zuhause zu geben und sein Leben zu retten. Sie
        schenken einem hilfsbedürftigen Tier eine zweite Chance.
      </p>
    </section>
    <section class="s-2">
      <h3>Vielfalt an Auswahl</h3>
      <p>
        Tierheime beherbergen Tiere unterschiedlicher Rassen, Größen,
        Altersgruppen und Persönlichkeiten. Sie können das Tier finden, das am
        besten zu Ihrem Lebensstil und Ihren Bedürfnissen passt.
      </p>
    </section>
    <section class="s-3">
      <h3>Unterstützung von Tierschutzorganisationen</h3>
      <p>
        Indem Sie ein Tier aus dem Tierheim adoptieren, unterstützen Sie die
        wichtige Arbeit von Tierschutzorganisationen und helfen dabei, die
        Überbelegung in Tierheimen zu verringern.
      </p>
    </section>
  </article>
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

h2.argument-question {
  margin-bottom: 1rem;
  padding: 5px;
  color: white;
  text-align: center;
  grid-row: 1/1;
  grid-column: 1/10;
}
h3 {
  color: $s-green;
}
p {
  color: white;
}
section {
  padding: 0 0.5rem 0 0.5rem;
  margin-bottom: 1rem;
  z-index: 1;
}
article.arguments {
  display: grid;
  grid-template-rows: 10% 1fr 1fr 1fr;
  grid-template-columns: repeat(10, 1fr);
  background: rgb(20, 40, 29);
  padding: 0.5rem;
  margin: 1rem 1rem;
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.s-1 {
  grid-row: 2/2;
  grid-column: 1/-1;
}
.s-2 {
  grid-row: 3/3;
  grid-column: 1/-1;
}
.s-3 {
  grid-row: 4/4;
  grid-column: 1/-1;
}
</style>
