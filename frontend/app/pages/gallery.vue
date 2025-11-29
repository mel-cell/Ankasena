<template>
  <div class="bg-white min-h-screen">
    <!-- Header -->
    <div class="pt-32 pb-16 bg-gray-100 border-b border-gray-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <!-- Left: Title -->
          <div class="lg:col-span-7">
            <span
              class="inline-block px-4 py-1.5 bg-gray-900 text-white text-xs font-bold tracking-widest uppercase mb-6"
              >Dokumentasi</span
            >
            <h1
              class="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase"
            >
              GALERI<br />
              <span class="text-gray-400">KEGIATAN</span>
            </h1>
          </div>

          <!-- Right: Description -->
          <div class="lg:col-span-5">
            <p class="text-xl text-gray-600 leading-relaxed font-medium">
              Momen-momen berharga dan jejak langkah kami dalam membangun cerita
              di Ankasena.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Grid -->
    <div class="container mx-auto px-4 py-16">
      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button
          v-for="filter in filters"
          :key="filter"
          class="px-6 py-2 rounded-full border-2 font-bold text-sm uppercase tracking-wide transition-all"
          :class="
            activeFilter === filter
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-white text-gray-500 border-gray-200 hover:border-gray-900 hover:text-gray-900'
          "
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Masonry Layout -->
      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        <div
          v-for="(item, index) in filteredItems"
          :key="index"
          class="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8"
          >
            <span
              class="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2"
              >{{ item.category }}</span
            >
            <h3 class="text-white text-2xl font-bold leading-tight">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Galeri - OSIS MPK Ankasena",
});

const activeFilter = ref("Semua");
const filters = ["Semua", "Event", "Rapat", "Sosial", "Lomba"];

const items = [
  {
    title: "Classmeeting 2024",
    category: "Event",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Rapat Kerja Tahunan",
    category: "Rapat",
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Bakti Sosial Ramadhan",
    category: "Sosial",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Juara Umum Porseni",
    category: "Lomba",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Latihan Dasar Kepemimpinan",
    category: "Event",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Kunjungan Industri",
    category: "Event",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
];

const filteredItems = computed(() => {
  if (activeFilter.value === "Semua") return items;
  return items.filter((item) => item.category === activeFilter.value);
});
</script>
