<template>
  <div class="bg-white min-h-screen">
    <!-- Header -->
    <div class="pt-32 pb-16 bg-gray-100 border-b border-gray-200 mb-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <!-- Left: Title -->
          <div class="lg:col-span-7">
            <span
              class="inline-block px-4 py-1.5 bg-gray-900 text-white text-xs font-bold tracking-widest uppercase mb-6"
              >Berita & Artikel</span
            >
            <h1
              class="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase"
            >
              KABAR<br />
              <span class="text-gray-400">ANKASENA</span>
            </h1>
          </div>

          <!-- Right: Description -->
          <div class="lg:col-span-5">
            <p class="text-xl text-gray-600 leading-relaxed font-medium">
              Ikuti perkembangan terbaru, prestasi siswa, dan artikel inspiratif
              dari lingkungan SMA Negeri 1 Ankasena.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <!-- Featured Post -->
      <div
        v-if="featuredPost"
        class="mb-24 group cursor-pointer relative rounded-3xl overflow-hidden aspect-[21/9]"
      >
        <img
          :src="
            featuredPost.image ||
            'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop'
          "
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt="Featured Post"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
        ></div>
        <div class="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
          <span
            class="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-lg text-xs font-bold uppercase tracking-wider mb-4 border border-white/30"
          >
            {{ featuredPost.category || "Utama" }}
          </span>
          <h2
            class="text-3xl md:text-5xl font-black text-white mb-6 leading-tight group-hover:underline decoration-4 underline-offset-8"
          >
            {{ featuredPost.title }}
          </h2>
          <p class="text-lg text-gray-300 line-clamp-2 mb-8 max-w-2xl">
            {{ featuredPost.summary }}
          </p>
          <div
            class="flex items-center gap-4 text-white/80 text-sm font-medium"
          >
            <span>{{
              new Date(featuredPost.publishedDate).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}</span>
            <span class="w-1 h-1 bg-white/50 rounded-full"></span>
            <span>5 min read</span>
          </div>
        </div>
        <NuxtLink
          :to="`/posts/${featuredPost.slug}`"
          class="absolute inset-0"
        ></NuxtLink>
      </div>

      <!-- Filters & Search -->
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-gray-100 pb-8"
      >
        <div
          class="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar"
        >
          <button
            v-for="cat in categories"
            :key="cat"
            class="px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap"
            :class="
              activeCategory === cat
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            "
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
        <div class="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Cari berita..."
            class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
          />
          <svg
            class="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <!-- Post Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        <article
          v-for="post in regularPosts"
          :key="post.id"
          class="group cursor-pointer flex flex-col h-full"
        >
          <div
            class="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative bg-gray-100"
          >
            <img
              :src="
                post.image ||
                'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop'
              "
              :alt="post.title"
              class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-900 shadow-sm"
            >
              {{ post.category || "Berita" }}
            </div>
          </div>
          <div class="flex-1 flex flex-col">
            <div
              class="flex items-center gap-3 text-sm text-gray-500 mb-3 font-medium"
            >
              <span>{{
                new Date(post.publishedDate).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              }}</span>
              <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>3 min read</span>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-3 group-hover:underline decoration-2 underline-offset-4 leading-tight"
            >
              <NuxtLink :to="`/posts/${post.slug}`">{{ post.title }}</NuxtLink>
            </h3>
            <p
              class="text-gray-600 line-clamp-3 mb-4 flex-1 text-sm leading-relaxed"
            >
              {{ post.summary }}
            </p>
            <NuxtLink
              :to="`/posts/${post.slug}`"
              class="text-gray-900 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
            >
              Baca Selengkapnya
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div
        v-if="posts.length === 0"
        class="text-center py-24 bg-gray-50 rounded-3xl border border-gray-100"
      >
        <p class="text-gray-500 text-lg font-medium">
          Belum ada berita yang diterbitkan.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeCategory = ref("Semua");
const categories = ["Semua", "Prestasi", "Akademik", "Event", "Opini"];

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

// Computed properties for Featured vs Regular posts
const featuredPost = computed(() => {
  if (!posts.value || posts.value.length === 0) return null;
  return posts.value[0];
});

const regularPosts = computed(() => {
  if (!posts.value || posts.value.length === 0) return [];
  return posts.value.slice(1);
});

useHead({
  title: "Berita - OSIS MPK Ankasena",
});
</script>
