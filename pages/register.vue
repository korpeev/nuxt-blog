<template>
  <div class="rounded shadow-md py-5 space-y-2 px-2 bg-white">
    <h1 class="text-center text-2xl uppercase font-bold">register</h1>
    <register-form />
  </div>
</template>
<script setup lang="ts">
import { definePageMeta } from "#imports";
import RegisterForm from "~/components/auth-forms/register-form.vue";

definePageMeta({
  layout: "auth",
  middleware: "guest",
});
</script>
