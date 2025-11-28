<template>
  <div>
    <div v-if="post">
      <header class="container mx-auto px-4 pt-12 pb-8 text-center">
        <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
        <p class="text-gray-500">
          {{ new Date(post.publishedDate).toLocaleDateString() }}
        </p>
      </header>
      <BlockRenderer :blocks="post.layout" />
    </div>
    <div v-else class="container mx-auto px-4 py-12 text-center">
      <h1 class="text-4xl font-bold mb-4">Post Not Found</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockRenderer from "~/components/BlockRenderer.vue";

const route = useRoute();
const slug = route.params.slug;

const { data: post } = await useAsyncData(`post-${slug}`, async () => {
  try {
    const response = await $fetch<any>("/api/posts", {
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
