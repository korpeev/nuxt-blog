<template>
  <span v-if="props.label" class="text-center">{{ props.label }}</span>
  <div class="flex items-center space-x-2 relative">
    <slot
      name="prepend"
      :onClickIcon="onIconClick"
      :class="'absolute left-3 cursor-pointer'"
    />
    <input
      :="field"
      :class="{
        'border-2 border-red-400 focus:outline-red-400': hasError,
      }"
      :name="props.name"
      ref="inputRef"
      class="border rounded p-2 pl-8"
      :type="props.type ?? 'text'"
    />
    <slot name="append" :class="'absolute right-2 cursor-pointer'" />
  </div>
  <transition name="fade">
    <span v-if="hasError" class="text-red-400 font-medium">{{
      props.errorMessage
    }}</span>
  </transition>
</template>
<script lang="ts" setup>
import { computed, ref } from "#imports";
import { HTMLAttributes } from "@vue/runtime-dom";

interface Props extends HTMLAttributes {
  label?: string;
  name?: string;
  field?: unknown;
  errorMessage?: string;
  type?: string;
}

const props = defineProps<Props>();
const inputRef = ref();
const hasError = computed(
  () => props.errorMessage && props.errorMessage.length
);
const onIconClick = () => {
  inputRef.value.focus();
};
</script>
<script lang="ts">
export default {
  name: "app-input",
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
