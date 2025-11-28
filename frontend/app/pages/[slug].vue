<template>
  <div>
    <div v-if="page">
      <div class="container mx-auto px-4 pt-12 pb-8 text-center">
        <h1 class="text-4xl font-bold mb-4">{{ page.title }}</h1>
      </div>
      <BlockRenderer :blocks="page.layout" />
    </div>
    <div v-else class="container mx-auto px-4 py-12 text-center">
      <h1 class="text-4xl font-bold mb-4">Page Not Found</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockRenderer from "~/components/BlockRenderer.vue";

const route = useRoute();
const slug = route.params.slug;

const { data: page } = await useAsyncData(`page-${slug}`, async () => {
  try {
    const response = await $fetch<any>("/api/pages", {
      params: {
        where: {
          slug: {
            equals: slug,
          },
        },
      },
    });
    return response.docs?.[0] || null;
  } catch (e) {
    console.error(e);
    return null;
  }
});
</script>
