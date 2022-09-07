<template>
  <div class="flex-col flex">
    <app-header />
    <div class="mt-5 mx-auto">
      <ul class="flex items-center space-x-5 uppercase">
        <li class="font-bold">
          <nuxt-link
            class="list-item"
            active-class="list-item-active"
            to="/post"
            >all posts</nuxt-link
          >
        </li>
        <li class="font-bold">
          <nuxt-link
            class="list-item"
            active-class="list-item-active"
            to="/favorites"
            >favorites</nuxt-link
          >
        </li>
        <li class="font-bold">
          <nuxt-link
            class="list-item"
            active-class="list-item-active list-item"
            to="/my-posts"
            >my posts</nuxt-link
          >
        </li>
      </ul>
    </div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import AppHeader from "~/components/Header";
</script>
<style lang="scss" scoped>
.list-item {
  @apply cursor-pointer font-bold before:w-0 before:h-full before:bg-emerald-400 before:block relative before:absolute hover:text-white hover:before:w-full before:transition-all before:bg-emerald-400 before:-z-10 before:hover:rounded-r-full py-1 px-2 before:top-0 before:left-0;
}
.list-item-active {
  @apply rounded-r-full bg-emerald-400 text-white px-2;
}
</style>
