enum gender {
  male = "male",
  female = "female",
}

interface DogOffer {
  id: string;
  name: string;
  main_img: string;
  add_imgs: string[];
  age: number;
  description: string;
  health_status: string;
  isActive: boolean;
  shelter_id: string;
  dog_id: string;
  gender: gender;
}

export const useOfferStore = defineStore("offer", {
  state: () => {
    return {
      offers: [] as DogOffer[] | null,
      search: {} as string[],
    };
  },
  actions: {
    async fetchAllOffers() {
      this.offers = [];
      const { data } = await $fetch("/api/alloffers");
      if (data !== null) {
        this.offers = data;
      }
    },
  },
});
