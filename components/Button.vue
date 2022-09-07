<template>
  <button
    :disabled="disabled"
    :type="type"
    class="bg-emerald-400 text-white px-5 rounded py-2 font-bold leading-2"
  >
    <template v-if="title.length">{{ title }}</template>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { toRefs } from "#imports";

interface Props {
  title?: string;
  disabled?: boolean;
  type?: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: "",
  disabled: false,
  type: "button",
});
const { title, disabled } = toRefs(props);
</script>
<script lang="ts">
export default {
  name: "v-btn",
};
</script>
