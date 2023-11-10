enum gender {
  male = "male",
  female = "female",
}
interface Dogs {
  name: String;
}
interface Shelters {
  location: String;
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
  dogs: Dogs;
  gender: gender;
  shelters: Shelters;
}

export const useOfferStore = defineStore("offer", {
  state: () => {
    return {
      offers: [] as DogOffer[] | null,
      currentLocation: "Alle Regionen",
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
    async fetchByCity(location: string) {
      this.currentLocation = location;
      this.offers = [];
      const response = (await $fetch(
        `/api/specificoffer?location=${location}`
      )) as {
        data: DogOffer[];
      };
      console.log(response);
      if (response.data !== null) {
        this.offers = response.data;
      }
    },
  },
});