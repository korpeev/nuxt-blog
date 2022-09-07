<template>
  <main>
    <div class="grid grid-cols-12">
      <div class="">
        <NuxtPage />
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { definePageMeta } from "#imports";

const router = useRouter();
onMounted(() => {
  router.push("/post");
});
definePageMeta({
  middleware: ["auth"],
});
</script>
