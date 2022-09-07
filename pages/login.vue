<template>
  <div class="rounded shadow-md py-5 space-y-2 px-2 bg-white">
    <h1 class="text-center text-2xl uppercase font-bold">login</h1>
    <login-form />
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from "#imports";
import LoginForm from "~/components/auth-forms/login-form.vue";

definePageMeta({
  layout: "auth",
  middleware: "guest",
});
</script>
