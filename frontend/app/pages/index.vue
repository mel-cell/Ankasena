<template>
  <div class="overflow-hidden bg-white">
    <!-- Hero Section -->
    <section class="relative pt-12 pb-12 lg:pt-20 lg:pb-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 lg:mt-10">
        <!-- Header Text Layout -->
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-10">
          <!-- Left: Title -->
          <div class="lg:col-span-7">
            <h1
              class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
            >
              Wujudkan Visi Misi dengan OSIS <br />
              MPK
            </h1>
          </div>

          <!-- Right: Description & Buttons -->
          <div class="lg:col-span-5 flex flex-col">
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Wadah aspirasi dan kreasi siswa untuk membangun lingkungan sekolah
              yang inspiratif, berprestasi, dan berkarakter mulia.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/divisions"
                class="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                Lihat Program
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
              <NuxtLink
                to="/profile"
                class="px-8 py-4 bg-transparent border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Tentang Kami
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Hero Image (Full Width) -->
        <div class="relative w-full">
          <div
            class="relative -top-54 z-0 rounded-[2.5rem] overflow-hidden aspect-[2/1] group w-full"
          >
            <!-- Hero Image -->
            <img
              src="~/assets/image/heroankasena.png"
              alt="Hero Image"
              class="absolute inset-0 w-full h-full object-cover"
            />

            <!-- Overlay Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
            ></div>
          </div>

          <!-- Floating Elements -->
          <div
            class="absolute bottom-80 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block"
          >
            <p class="text-3xl font-bold text-gray-900 mb-1">50+</p>
            <p class="text-sm text-gray-500">Anggota Aktif Berdedikasi</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BIG TEXT BANNER -->
    <section class="py-5 overflow-hidden -mt-86">
      <div class="container mx-auto px-4">
        <h2
          class="text-[13vw] leading-none font-black text-center text-gray-900 tracking-tighter opacity-90 select-none"
        >
          ANKASENA
        </h2>
      </div>
    </section>

    <!-- Dynamic Gallery Section -->
    <section class="py-20 bg-gray-50 overflow-hidden">
      <div class="container mx-auto px-4">
        <div
          class="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 text-gray-600 text-sm font-medium mb-6"
        >
          <span class="flex h-2 w-2 rounded-full bg-gray-900 mr-2"></span>
          Galery Ankasena
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <!-- Gallery Item 1 (Large) -->
          <div
            class="group relative row-span-2 col-span-2 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gray-300 transition-colors duration-300 group-hover:bg-gray-400"
            ></div>
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span class="text-white font-bold text-xl">Kegiatan Utama</span>
            </div>
          </div>

          <!-- Gallery Item 2 (Tall) -->
          <div
            class="group relative row-span-2 col-span-1 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gray-200 transition-colors duration-300 group-hover:bg-gray-300"
            ></div>
          </div>

          <!-- Gallery Item 3 (Standard) -->
          <div
            class="group relative row-span-1 col-span-1 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gray-300 transition-colors duration-300 group-hover:bg-gray-400"
            ></div>
          </div>

          <!-- Gallery Item 4 (Standard) -->
          <div
            class="group relative row-span-1 col-span-1 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gray-200 transition-colors duration-300 group-hover:bg-gray-300"
            ></div>
          </div>

          <!-- Gallery Item 5 (Wide) -->
          <div
            class="group relative row-span-1 col-span-2 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gray-300 transition-colors duration-300 group-hover:bg-gray-400"
            ></div>
          </div>

          <!-- Gallery Item 6 (Standard) -->
          <div
            class="group relative row-span-1 col-span-1 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gray-200 transition-colors duration-300 group-hover:bg-gray-300"
            ></div>
          </div>

          <!-- Gallery Item 7 (Tall) -->
          <div
            class="group relative row-span-2 col-span-1 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gray-300 transition-colors duration-300 group-hover:bg-gray-400"
            ></div>
          </div>

          <!-- Gallery Item 8 (Standard) -->
          <div
            class="group relative row-span-1 col-span-1 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gray-200 transition-colors duration-300 group-hover:bg-gray-300"
            ></div>
          </div>

          <!-- Gallery Item 9 (Wide) -->
          <div
            class="group relative row-span-1 col-span-2 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gray-300 transition-colors duration-300 group-hover:bg-gray-400"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs / Services Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div class="max-w-xl">
            <div
              class="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 text-gray-600 text-sm font-medium mb-6"
            >
              <span class="flex h-2 w-2 rounded-full bg-gray-900 mr-2"></span>
              Program Kerja
            </div>
            <h2
              class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Program Unggulan & <br />
              Seksi Bidang
            </h2>
          </div>
          <p class="text-gray-600 max-w-md mb-2">
            Berbagai program kerja dan bidang yang dirancang untuk mengembangkan
            potensi siswa secara menyeluruh.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="group cursor-pointer">
            <div
              class="aspect-[4/3] rounded-3xl bg-gray-100 mb-6 overflow-hidden relative"
            >
              <div
                class="absolute inset-0 bg-gray-200 transition-transform duration-500 group-hover:scale-105"
              ></div>
              <div
                class="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Sekbid 1
              </div>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-2 group-hover:underline decoration-2 underline-offset-4"
            >
              Ketaqwaan & Rohani
            </h3>
            <p class="text-gray-600 line-clamp-2">
              Membina ketaqwaan terhadap Tuhan Yang Maha Esa melalui kegiatan
              keagamaan yang inklusif.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="group cursor-pointer">
            <div
              class="aspect-[4/3] rounded-3xl bg-gray-100 mb-6 overflow-hidden relative"
            >
              <div
                class="absolute inset-0 bg-gray-200 transition-transform duration-500 group-hover:scale-105"
              ></div>
              <div
                class="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Sekbid 4
              </div>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-2 group-hover:underline decoration-2 underline-offset-4"
            >
              Prestasi Akademik
            </h3>
            <p class="text-gray-600 line-clamp-2">
              Meningkatkan prestasi akademik dan wawasan keilmuan melalui
              kompetisi dan pelatihan.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="group cursor-pointer">
            <div
              class="aspect-[4/3] rounded-3xl bg-gray-100 mb-6 overflow-hidden relative"
            >
              <div
                class="absolute inset-0 bg-gray-200 transition-transform duration-500 group-hover:scale-105"
              ></div>
              <div
                class="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Sekbid 6
              </div>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-2 group-hover:underline decoration-2 underline-offset-4"
            >
              Kreativitas & Seni
            </h3>
            <p class="text-gray-600 line-clamp-2">
              Menampung dan mengembangkan kreativitas serta bakat seni siswa
              dalam berbagai media.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Dark Footer / CTA Section -->
    <section class="bg-gray-900 text-white py-24 rounded-t-[3rem] mt-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Di Ankasena, kami menyediakan wadah pengembangan diri yang
              <span class="text-gray-400">inklusif dan progresif.</span>
            </h2>
            <div class="flex gap-4">
              <NuxtLink
                to="/contact"
                class="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Gabung Sekarang
              </NuxtLink>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div
              class="bg-gray-800 rounded-2xl p-6 aspect-square flex flex-col justify-between"
            >
              <svg
                class="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <div>
                <p class="text-2xl font-bold">Solid</p>
                <p class="text-gray-400 text-sm">Kekeluargaan yang Erat</p>
              </div>
            </div>
            <div
              class="bg-gray-800 rounded-2xl p-6 aspect-square flex flex-col justify-between"
            >
              <svg
                class="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M17.636 17.636l-.707-.707M12 21v-1M4.364 17.636l.707-.707M3 12h1m1.636-6.364l.707.707"
                ></path>
              </svg>
              <div>
                <p class="text-2xl font-bold">Inovatif</p>
                <p class="text-gray-400 text-sm">Ide & Gagasan Baru</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-20 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p class="text-gray-500">
            © 2024 OSIS MPK Ankasena. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" class="text-gray-400 hover:text-white">YouTube</a>
            <a href="#" class="text-gray-400 hover:text-white">Email</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home - OSIS MPK Ankasena",
});
</script>
