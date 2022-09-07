import { defineStore } from "pinia";
import { IUser } from "~/types";
import { useRouter } from "#imports";

interface IUserState {
  isAuth: boolean;
  data: Omit<IUser, "accessToken">;
}
const initialState: IUserState = {
  isAuth: false,
  data: {
    id: -1,
    username: "",
    email: "",
  },
};
export const useUserStore = defineStore({
  id: "user",
  state: () => initialState,
  getters: {},
  actions: {
    setUser(userData: Omit<IUser, "accessToken">) {
      this.isAuth = true;
      this.data = userData;
    },
    async removeUser() {
      const router = useRouter();
      this.$state = initialState;
      await router.replace("/");
    },
  },
});
