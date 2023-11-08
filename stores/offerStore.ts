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
      queryTEST: null as any,
    };
  },
  actions: {
    async fetchAllOffers() {
      this.offers = [];
      // behebt unknown Fehler
      const response = (await $fetch("/api/alloffers")) as {
        data: DogOffer[];
      };
      if (response.data !== null) {
        this.offers = response.data;
      }
    },
    async fetchSpecificOffers(
      page: number,
      location: string,
      breedID: string,
      age: number,
      gender: string
    ) {
      this.offers = [];
      const response = (await $fetch(
        `/api/specificoffer?page=${page}&location=${location}&breedID=${breedID}&age=${age}&gender=${gender}`
      )) as {
        data: DogOffer[];
        query: any;
      };
      console.log(response);
      if (response.data !== null) {
        this.offers = response.data;
        this.queryTEST = response.query;
      }
    },
  },
});
