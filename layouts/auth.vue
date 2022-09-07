<template>
  <div class="wrapper">
    <slot />
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.wrapper {
  @apply h-screen flex justify-center items-center w-screen;
  background: linear-gradient(
    to right,
    #78ffd6,
    #a8ff78
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
