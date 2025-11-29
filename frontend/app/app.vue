<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

const colorMode = useColorMode();
colorMode.preference = "light";
</script>
