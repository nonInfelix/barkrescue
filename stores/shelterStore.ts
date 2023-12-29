export interface Shelter {
  id?: string | any;
  created_at?: string | any;
  location: string;
  street: string;
  street_number: string;
  zip_code: number;
  email: string;
  registergericht: string;
  registernummer: string;
  logo_img: string | any;
  name: string;
  shelter_dogs?: Dog | null;
  user_id: string | any;
}
interface Dog {
  id: string;
  name: string;
  main_img: string;
}

export const useShelterStore = defineStore("shelter", {
  state: () => {
    return {
      shelters: [] as Shelter[],
      dogs: [] as Dog[] | null,
    };
  },
  actions: {
    async fetchShelter(id: string) {
      const { data } = await $fetch<any>(`/api/shelter/${id}`);
      this.shelters = data as Shelter[];
      this.dogs = this.shelters[0].shelter_dogs as Dog[] | null;
      console.log("shelter-data:  ", this.shelters);
    },
    async createShelter(shelter: any, userId: string) {
      const response = await $fetch<any>("/api/shelter/create", {
        method: "POST",
        body: { shelter: shelter, user_id: userId },
      });
      return response;
    },
  },
});
