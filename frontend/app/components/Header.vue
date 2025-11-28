<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink
        to="/"
        class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
      >
        Ankasena
      </NuxtLink>

      <nav class="hidden md:flex items-center space-x-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          
          :to="link.to"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors relative group"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"
          ></span>
        </NuxtLink>
      </nav>

      <div class="flex items-center space-x-4">
        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span class="sr-only">Open menu</span>
          <svg
            class="w-6 h-6 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
  <!-- Spacer to prevent content from hiding behind fixed header -->
  <div class="h-20"></div>
</template>

<script setup lang="ts">
const links = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/posts" },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" },
];
</script>
