<template>
  <div>
    <div v-if="page">
      <div class="container mx-auto px-4 pt-12 pb-8 text-center">
        <h1 class="text-4xl font-bold mb-4">{{ page.title }}</h1>
      </div>
      <BlockRenderer :blocks="page.layout" />
    </div>
    <div v-else class="container mx-auto px-4 py-12 text-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to Ankasena</h1>
      <p>Please create a page with slug "home" in the admin panel.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockRenderer from "~/components/BlockRenderer.vue";

const { data: page } = await useAsyncData("home", async () => {
  try {
    const response = await $fetch<any>("/api/pages", {
      params: {
        where: {
          slug: {
            equals: "home",
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
