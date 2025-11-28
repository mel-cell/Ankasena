<template>
  <div :class="['my-8', sizeClass]">
    <div :class="{ 'container mx-auto px-4': block.size !== 'fullscreen' }">
      <NuxtImg
        v-if="imageUrl"
        :src="imageUrl"
        :alt="block.caption || 'Image'"
        :class="[
          'shadow-lg object-cover',
          block.size === 'fullscreen'
            ? 'w-full h-[60vh] object-center'
            : 'rounded-lg w-full',
        ]"
      />
      <p v-if="block.caption" class="text-center text-gray-500 mt-2 text-sm">
        {{ block.caption }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  block: any;
}>();

const config = useRuntimeConfig();

const imageUrl = computed(() => {
  if (typeof props.block.image === "object" && props.block.image?.url) {
    return `${config.public.payloadUrl}${props.block.image.url}`;
  }
  return null;
});

const sizeClass = computed(() => {
  switch (props.block.size) {
    case "wide":
      return "";
    case "fullscreen":
      return "w-full";
    default:
      return "";
  }
});
</script>
