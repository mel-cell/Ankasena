<template>
  <div>
    <component
      v-for="(block, index) in blocks"
      :key="index"
      :is="resolveComponent(block.blockType)"
      :block="block"
    />
  </div>
</template>

<script setup lang="ts">
import ContentBlock from "./blocks/ContentBlock.vue";
import ImageBlock from "./blocks/ImageBlock.vue";
import QuoteBlock from "./blocks/QuoteBlock.vue";

const props = defineProps<{
  blocks: any[];
}>();

const resolveComponent = (type: string) => {
  switch (type) {
    case "content":
      return ContentBlock;
    case "image":
      return ImageBlock;
    case "quote":
      return QuoteBlock;
    default:
      return null;
  }
};
</script>
