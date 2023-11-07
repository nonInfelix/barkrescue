import type DogInfo from "~/interfaces/dogInfo";

export const useDogStore = defineStore("dogs", {
  state: () => {
    return {
      dogs: [] as DogInfo[],
      dogSearch: [] as { text: string; value: string }[],
    };
  },
  actions: {
    async fetchDogs() {
      const { data } = await $fetch("/api/dogs");
      if (data !== null) {
        this.dogs = data;
        this.dogSearch = data.map((dog: DogInfo) => ({
          text: dog.name,
          value: dog.id,
        }));
      }
      console.log(data);
    },
  },
});
