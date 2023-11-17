interface User {
  email: string;
  password: string;
}

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {} as User,
    };
  },
  actions: {
    async createUser(email: string, password: string) {
      const { data } = await $fetch(`/api/user/create`, {
        method: "POST",
        body: { email: email, password: password } as User,
      });
      console.log(data);
    },
  },
});
