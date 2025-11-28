<template>
  <div class="container mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-8">Seksi Bidang (Sekbid)</h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">
      Daftar lengkap Seksi Bidang di OSIS MPK Ankasena.
    </p>

    <div class="grid gap-8">
      <div
        v-for="i in 6"
        :key="i"
        class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow"
      >
        <h2 class="text-2xl font-bold mb-2">Sekbid {{ i }}</h2>
        <p class="text-gray-600 dark:text-gray-400">
          Deskripsi singkat mengenai tugas dan fungsi Sekbid {{ i }}.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Sekbid - OSIS MPK Ankasena",
});
</script>
