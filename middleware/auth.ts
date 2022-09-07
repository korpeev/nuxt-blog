import { useUserStore } from "~/store/useUserStore";
import { defineNuxtRouteMiddleware, navigateTo } from "#imports";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  if (!userStore.isAuth) {
    return navigateTo("/login");
  }
});
