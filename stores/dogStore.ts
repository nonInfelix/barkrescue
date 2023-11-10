enum dogCategory {
  klein = "kleine Hunde",
  mittel = "mittelgroße Hunde",
  groß = "große hunde",
}

interface DogInfo {
  id: string;
  name: string;
  img: string;
  size: string;
  weight: string;
  fci_group: string;
  section: string;
  origin_country: string;
  color: string;
  lifespan: string;
  role: string;
  sports: string;
  character: string;
  category: dogCategory;
}

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
    },
  },
});
