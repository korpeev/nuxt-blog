<template>
  <header
    class="bg-emerald-400 px-10 py-4 text-white flex justify-between items-center"
  >
    <h1 class="font-bold text-2xl">Nuxt Posts</h1>
    <div>
      <button @click="logout" class="material-icons">logout</button>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { useUserStore } from "~/store/useUserStore";

const userStore = useUserStore();
const logout = () => {
  userStore.removeUser();
};
</script>
<script lang="ts">
export default {
  name: "app-header",
};
</script>
