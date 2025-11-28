<template>
  <div class="container mx-auto px-4 max-w-3xl my-8">
    <div v-if="htmlContent" v-html="htmlContent"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { serializeLexical } from "../../../utils/lexicalSerializer";

const props = defineProps<{
  block: any;
}>();

const htmlContent = computed(() => {
  if (props.block.content && props.block.content.root) {
    return serializeLexical(props.block.content.root);
  }
  return null;
});
</script>
