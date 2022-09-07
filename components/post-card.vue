<template>
  <div class="rounded shadow-md col-span-4 p-5">
    <div class="flex items-center">
      <h1 class="font-bold text-xl flex-grow text-center">
        {{ props.post.title }}
      </h1>
      <span>{{ parsedDate }}</span>
    </div>
    <p class="mt-5">
      {{ truncateDescription }}
    </p>
    <div class="mt-5 flex items-center justify-between">
      <span class="text-gray-500">{{ props.post.user.username }}</span>
      <div class="flex space-x-2 items-center">
        <button class="bg-emerald-400 px-2 rounded text-white">
          read more
        </button>
        <span>{{ likesCount }}</span>
        <button
          @click="onToggleLike"
          class="material-icons"
          :class="{ 'text-red-500': postIsLiked }"
        >
          {{ postIsLiked ? "favorite" : "favorite_outline" }}
        </button>
        <span>{{ commentsCount }}</span>
        <button class="material-icons">comment</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPost } from "~/types/post";
import { useUserStore } from "~/store/useUserStore";
import { useMutation } from "@vue/apollo-composable";
import { TOGGLE_LIKE_MUTATION } from "~/graphql/like";
import { ILike } from "~/types/like";
import { GET_ALL_POSTS_QUERY } from "~/graphql/post";

interface Props {
  post: IPost;
}
const userStore = useUserStore();
const props = defineProps<Props>();
const { mutate: toggleLikeMutate } = useMutation<
  { toggleLike: ILike },
  { postId: number }
>(TOGGLE_LIKE_MUTATION, {
  variables: {
    postId: props.post.id,
  },
  refetchQueries: [{ query: GET_ALL_POSTS_QUERY }, "GetAllPosts"],
});

const likesCount = computed(() => props.post.likes.length);
const commentsCount = computed(() => props.post.comments.length);
const parsedDate = computed(() =>
  new Date(props.post.createdAt).toLocaleDateString()
);
const postIsLiked = computed(
  () => !!props.post.likes.find(like => like.user.id === userStore.data.id)
);
const onToggleLike = () => {
  toggleLikeMutate();
};
const truncateDescription = computed(() =>
  props.post.content.length >= 20
    ? props.post.content.slice(20).concat("....")
    : props.post.content
);
</script>
