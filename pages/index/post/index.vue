<template>
  <div class="container max-w-[1100px] mx-auto mt-5">
    <div class="grid grid-cols-12 gap-4 grid-flow-row">
      <template v-if="!loading">
        <post-card
          v-for="post of result?.getPosts"
          :key="post.id"
          :post="post"
        />
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useLazyQuery } from "@vue/apollo-composable";
import { GET_ALL_POSTS_QUERY } from "~/graphql/post";

const {
  load: getPostsQuery,
  result,
  loading,
} = useLazyQuery(GET_ALL_POSTS_QUERY);
watch(result, value => {
  console.log(value);
});
onMounted(() => {
  getPostsQuery();
});
</script>
