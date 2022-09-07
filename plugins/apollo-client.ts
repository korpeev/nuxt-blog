import { defineNuxtPlugin } from "#app";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "~/apollo/apollo.client";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
