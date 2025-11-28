<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-center">Blog & News</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="post in posts"
        :key="post.id"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      >
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-2">
            <NuxtLink
              :to="`/posts/${post.slug}`"
              class="hover:text-primary-500 transition-colors"
            >
              {{ post.title }}
            </NuxtLink>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ post.summary }}
          </p>
          <div class="flex justify-between items-center text-sm text-gray-500">
            <span>{{ new Date(post.publishedDate).toLocaleDateString() }}</span>
            <NuxtLink
              :to="`/posts/${post.slug}`"
              class="text-primary-500 font-semibold hover:underline"
              >Read more</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", async () => {
  try {
    const response = await $fetch<any>("/api/posts", {
      params: {
        sort: "-publishedDate",
        where: {
          status: {
            equals: "published",
          },
        },
      },
    });
    return response.docs || [];
  } catch (e) {
    console.error(e);
    return [];
  }
});
</script>
