interface User {
  email: string;
  password: string;
}
interface FetchResponse<T> {
  data: T;
  error?: string;
}
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {} as any,
      isLoggedin: false,
      userData: {} as any,
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
    async signInUser(email: string, password: string) {
      const { data } = await $fetch(`/api/user/signIn`, {
        method: "POST",
        body: { email: email, password: password } as User,
      });
      console.log(data.user);
      this.user = data.user;
    },
    async getUserData() {
      const { data, error } = await useFetch("/api/user/userData", {
        headers: useRequestHeaders(["cookie"]),
      });
      console.log("data: ", data, "error :", error);
      this.userData = data;
    },
  },
});
