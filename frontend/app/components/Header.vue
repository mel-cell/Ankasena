<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink
        to="/"
        class="text-2xl font-bold bg-gray-800 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
      >
        Ankasena
      </NuxtLink>

      <nav class="hidden md:flex items-center space-x-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-base font-medium text-gray-600 hover:text-primary-500 transition-colors relative group"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"
          ></span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: "Beranda", to: "/" },
  { label: "Profil", to: "/profile" },
  { label: "Sekbid", to: "/divisions" },
  { label: "Galeri", to: "/gallery" },
  { label: "Kontak", to: "/contact" },
];
</script>
