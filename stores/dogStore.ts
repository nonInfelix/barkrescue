import type { dogInfo, DogSearchInfo } from "~/interfaces/dogInfo";

export const useDogStore = defineStore("dogs", {
  state: () => {
    return {
      dogs: [] as dogInfo[],
      dogSearch: [] as DogSearchInfo[],
    };
  },
  actions: {
    async fetchDogs() {
      const { data } = await $fetch("/api/dogs");
      this.dogs = data;
      this.dogSearch = data.map((dog: dogInfo) => ({
        text: dog.name,
        value: dog.id,
      }));
      console.log(data);
    },
  },
});
