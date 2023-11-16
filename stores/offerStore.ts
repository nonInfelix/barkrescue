enum gender {
  male = "male",
  female = "female",
}
interface shortInfoDogs {
  name: string;
}
interface shortInfoShelters {
  location: string;
}
interface shortInfoDogOffer {
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
  dogs: shortInfoDogs;
  gender: gender;
  shelters: shortInfoShelters;
}
interface InfoDogs {
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
  category: string;
  id: string;
}

interface InfoShelters {
  id: string;
  name: string;
  location: string;
  logo_img: string;
}

interface InfoDogOffer {
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
  dogs: InfoDogs;
  gender: gender;
  shelters: InfoShelters;
}

export const useOfferStore = defineStore("offer", {
  state: () => {
    return {
      offers: [] as shortInfoDogOffer[] | null,
      currentLocation: "Alle Regionen",
      currentDogID: null as string | null,
      currentDog: [] as InfoDogOffer[],
    };
  },
  actions: {
    async fetchAllOffers() {
      this.offers = [];
      // behebt unknown Fehler
      const response = (await $fetch("/api/alloffers")) as {
        data: shortInfoDogOffer[];
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
        data: shortInfoDogOffer[];
      };
      console.log(response);
      if (response.data !== null) {
        this.offers = response.data;
      }
    },
    async fetchByID(id: string) {
      this.currentDogID = id;
      const response = (await $fetch(`/api/offer/${id}`)) as {
        data: InfoDogOffer[];
      };
      console.log(response);
      if (response.data !== null) {
        this.currentDog = response.data;
      }
    },
  },
});
