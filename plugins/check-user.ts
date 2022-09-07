import { addRouteMiddleware, defineNuxtPlugin, navigateTo } from "#app";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { apolloClient } from "~/apollo/apollo.client";
import { userProfileQuery } from "~/graphql/user";
import { useUserStore } from "~/store/useUserStore";
import { IUser } from "~/types";

export default defineNuxtPlugin(nuxtApp => {
  addRouteMiddleware((to, from) => {
    provideApolloClient(apolloClient);
    const userStore = useUserStore();
    const { onResult, onError } = useQuery<{ getProfile: IUser }>(
      userProfileQuery
    );
    onResult(({ data }) => {
      userStore.setUser(data.getProfile);
    });
    onError(() => {
      navigateTo("/login");
    });
  });
});
