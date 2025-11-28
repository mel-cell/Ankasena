<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans"
  >
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>
