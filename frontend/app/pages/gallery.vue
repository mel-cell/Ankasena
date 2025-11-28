<template>
  <div class="container mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-8">Galeri Kegiatan</h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">
      Dokumentasi kegiatan-kegiatan seru OSIS MPK Ankasena.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="i in 6"
        :key="i"
        class="aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-400"
      >
        <span class="font-medium">Foto Kegiatan {{ i }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Galeri - OSIS MPK Ankasena",
});
</script>
