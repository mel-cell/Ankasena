<template>
  <div class="container mx-auto px-4">
    <blockquote
      class="border-l-4 border-primary-500 pl-4 italic my-8 max-w-2xl mx-auto"
    >
      <p class="text-xl text-gray-800 dark:text-gray-200 mb-2">
        "{{ block.quote }}"
      </p>
      <footer class="text-gray-600 dark:text-gray-400 font-semibold">
        — {{ block.author }}
      </footer>
    </blockquote>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  block: any;
}>();
</script>
