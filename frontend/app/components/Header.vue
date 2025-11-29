<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink
        to="/"
        class="text-2xl font-black tracking-tighter text-gray-900 hover:opacity-80 transition-opacity"
      >
        ANKASENA
      </NuxtLink>

      <nav class="hidden md:flex items-center space-x-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm  uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors relative group"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"
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
  { label: "Berita", to: "/posts" },
  { label: "Sekbid", to: "/divisions" },
  { label: "Galeri", to: "/gallery" },
  { label: "Kontak", to: "/contact" },
];
</script>
