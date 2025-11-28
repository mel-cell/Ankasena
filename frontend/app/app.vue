<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";

const colorMode = useColorMode();
colorMode.preference = "light";
</script>
