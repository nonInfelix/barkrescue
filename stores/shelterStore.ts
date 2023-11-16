interface Shelter {
  id: string;
  created_at: string;
  location: string;
  street: string;
  street_number: number;
  zip_code: number;
  email: string;
  registergericht: string;
  registernummer: string;
  logo_img: string;
  name: string;
  shelter_dogs: Dog | null;
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
      const { data } = await $fetch(`/api/shelter/${id}`);
      this.shelters = data as Shelter[];
      this.dogs = this.shelters[0].shelter_dogs as Dog[] | null;
      console.log("shelter-data:  ", this.shelters);
    },
  },
});
