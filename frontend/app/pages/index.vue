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
              class="text-5xl font-black uppercase sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
            >
              Wujudkan Visi Misi dengan <span class="text-gray-400">OSIS</span>
              <br />
              <span class="text-gray-400">MPK</span>
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
    <section class="py-5 overflow-hidden -mt-65">
      <div class="w-full mx-auto px-4">
        <h2
          class="text-[15vw] leading-none font-black text-center text-gray-900 tracking-tighter opacity-90 select-none"
        >
          ANKASENA
        </h2>
      </div>
    </section>

    <!-- News Ticker -->
    <div class="border-y border-gray-200 bg-white py-3 overflow-hidden">
      <div class="container mx-auto px-4 flex items-center gap-6">
        <span
          class="text-xs font-black uppercase tracking-widest text-red-600 shrink-0"
        >
          TERBARU
        </span>
        <div class="flex-1 overflow-hidden relative h-6">
          <div
            class="animate-marquee whitespace-nowrap flex gap-12 items-center absolute top-0 left-0 h-full"
          >
            <span class="text-sm font-medium text-gray-900"
              >Penerimaan Peserta Didik Baru Tahun Ajaran 2024/2025 Telah
              Dibuka!</span
            >
            <span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            <span class="text-sm font-medium text-gray-900"
              >Selamat kepada Tim Basket Ankasena atas Juara 1 DBL Series.</span
            >
            <span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            <span class="text-sm font-medium text-gray-900"
              >Jadwal Ujian Tengah Semester Genap dimulai tanggal 15
              Maret.</span
            >
            <span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            <span class="text-sm font-medium text-gray-900"
              >Workshop "Digital Creative" bersama Alumni sukses digelar.</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Visi Misi Section -->
    <section class="py-24 bg-white border-b border-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-16">
          <div class="lg:col-span-5">
            <div class="sticky top-32">
              <h2
                class="text-8xl font-black text-gray-900 tracking-tighter leading-[0.8] mb-8"
              >
                VISI<br />MISI
              </h2>
              <div class="h-3 w-32 bg-gray-900 mb-8"></div>
              <p class="text-lg text-gray-600 leading-relaxed max-w-md">
                Fondasi kokoh yang menjadi pedoman kami dalam melangkah,
                berkarya, dan memberikan dampak positif bagi almamater.
              </p>
            </div>
          </div>
          <div class="lg:col-span-7 space-y-16">
            <!-- Visi -->
            <div>
              <span
                class="inline-block px-4 py-1.5 bg-gray-900 text-white text-xs font-bold tracking-widest uppercase mb-6"
                >Visi Utama</span
              >
              <h3
                class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              >
                "Menjadikan OSIS MPK sebagai organisasi yang
                <span class="text-gray-400"
                  >inklusif, aspiratif, dan progresif</span
                >
                dalam membangun karakter siswa."
              </h3>
            </div>

            <!-- Misi List -->
            <div class="grid gap-8">
              <div
                class="group border-l-4 border-gray-200 pl-8 hover:border-gray-900 transition-colors duration-300"
              >
                <h4
                  class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3"
                >
                  <span
                    class="text-sm text-gray-400 font-mono group-hover:text-gray-900 transition-colors"
                    >01.</span
                  >
                  Ketaqwaan & Akhlak
                </h4>
                <p class="text-gray-600">
                  Meningkatkan keimanan dan ketaqwaan serta budi pekerti luhur
                  seluruh siswa.
                </p>
              </div>
              <div
                class="group border-l-4 border-gray-200 pl-8 hover:border-gray-900 transition-colors duration-300"
              >
                <h4
                  class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3"
                >
                  <span
                    class="text-sm text-gray-400 font-mono group-hover:text-gray-900 transition-colors"
                    >02.</span
                  >
                  Potensi & Bakat
                </h4>
                <p class="text-gray-600">
                  Mewadahi dan mengembangkan minat, bakat, serta potensi siswa
                  dalam berbagai bidang.
                </p>
              </div>
              <div
                class="group border-l-4 border-gray-200 pl-8 hover:border-gray-900 transition-colors duration-300"
              >
                <h4
                  class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3"
                >
                  <span
                    class="text-sm text-gray-400 font-mono group-hover:text-gray-900 transition-colors"
                    >03.</span
                  >
                  Solidaritas
                </h4>
                <p class="text-gray-600">
                  Membangun rasa kekeluargaan dan solidaritas yang kuat antar
                  warga sekolah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="py-24 bg-white border-b border-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2
              class="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4"
            >
              BERITA TERKINI
            </h2>
            <p class="text-gray-600 max-w-lg">
              Informasi terbaru seputar kegiatan, prestasi, and pengumuman
              penting sekolah.
            </p>
          </div>
          <NuxtLink
            to="/posts"
            class="group flex items-center gap-2 text-gray-900 font-bold border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
          >
            Baca Semua Berita
            <svg
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- News Card 1 -->
          <article class="group cursor-pointer flex flex-col h-full">
            <div
              class="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
                alt="News 1"
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-900"
              >
                Prestasi
              </div>
            </div>
            <div class="flex-1 flex flex-col">
              <div
                class="flex items-center gap-3 text-sm text-gray-500 mb-3 font-medium"
              >
                <span>12 Maret 2024</span>
                <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>5 min read</span>
              </div>
              <h3
                class="text-2xl font-bold text-gray-900 mb-3 group-hover:underline decoration-2 underline-offset-4 leading-tight"
              >
                Tim Basket Ankasena Raih Juara 1 DBL Series 2024
              </h3>
              <p class="text-gray-600 line-clamp-3 mb-4 flex-1">
                Perjuangan keras tim basket sekolah akhirnya membuahkan hasil
                manis dengan membawa pulang piala bergilir...
              </p>
              <span
                class="text-gray-900 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
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
              </span>
            </div>
          </article>

          <!-- News Card 2 -->
          <article class="group cursor-pointer flex flex-col h-full">
            <div
              class="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                alt="News 2"
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-900"
              >
                Akademik
              </div>
            </div>
            <div class="flex-1 flex flex-col">
              <div
                class="flex items-center gap-3 text-sm text-gray-500 mb-3 font-medium"
              >
                <span>10 Maret 2024</span>
                <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>3 min read</span>
              </div>
              <h3
                class="text-2xl font-bold text-gray-900 mb-3 group-hover:underline decoration-2 underline-offset-4 leading-tight"
              >
                Sosialisasi SNBP & SNBT untuk Kelas XII
              </h3>
              <p class="text-gray-600 line-clamp-3 mb-4 flex-1">
                Persiapan matang menuju perguruan tinggi impian dimulai dari
                sekarang. Simak jadwal dan persyaratannya...
              </p>
              <span
                class="text-gray-900 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
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
              </span>
            </div>
          </article>

          <!-- News Card 3 -->
          <article class="group cursor-pointer flex flex-col h-full">
            <div
              class="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
                alt="News 3"
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-900"
              >
                Event
              </div>
            </div>
            <div class="flex-1 flex flex-col">
              <div
                class="flex items-center gap-3 text-sm text-gray-500 mb-3 font-medium"
              >
                <span>08 Maret 2024</span>
                <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>4 min read</span>
              </div>
              <h3
                class="text-2xl font-bold text-gray-900 mb-3 group-hover:underline decoration-2 underline-offset-4 leading-tight"
              >
                Recap: Kemeriahan HUT Sekolah ke-57
              </h3>
              <p class="text-gray-600 line-clamp-3 mb-4 flex-1">
                Ribuan siswa dan alumni memadati lapangan utama dalam puncak
                perayaan ulang tahun sekolah...
              </p>
              <span
                class="text-gray-900 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
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
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Sekbid / Divisions (Bento Grid) -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2
              class="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4"
            >
              SEKSI BIDANG
            </h2>
            <p class="text-gray-600 max-w-lg">
              Unit-unit kerja spesifik yang bergerak dinamis untuk mengeksekusi
              program kerja unggulan.
            </p>
          </div>
          <NuxtLink
            to="/divisions"
            class="group flex items-center gap-2 text-gray-900 font-bold border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
          >
            Lihat Semua Sekbid
            <svg
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Large Card -->
          <div
            class="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300 group"
          >
            <div class="flex justify-between items-start mb-8">
              <span
                class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-colors"
                >Sekbid 1</span
              >
              <svg
                class="w-8 h-8 text-gray-300 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              Ketaqwaan & Rohani
            </h3>
            <p class="text-gray-600 mb-8 max-w-md">
              Fokus pada pengembangan spiritualitas dan toleransi beragama
              melalui kegiatan-kegiatan yang bermakna.
            </p>
            <div class="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-gray-900 w-3/4"></div>
            </div>
          </div>

          <!-- Tall Card -->
          <div
            class="md:row-span-2 bg-gray-900 p-8 rounded-2xl text-white flex flex-col justify-between group overflow-hidden relative"
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"
            ></div>
            <div>
              <span
                class="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold uppercase tracking-wider text-white mb-6 inline-block"
                >Sekbid 3</span
              >
              <h3 class="text-3xl font-bold mb-4">Bela Negara</h3>
              <p class="text-gray-400">
                Menanamkan jiwa patriotisme dan kedisiplinan yang tinggi.
              </p>
            </div>
            <div class="mt-8">
              <div class="flex -space-x-4">
                <div
                  class="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900"
                ></div>
                <div
                  class="w-10 h-10 rounded-full bg-gray-600 border-2 border-gray-900"
                ></div>
                <div
                  class="w-10 h-10 rounded-full bg-gray-500 border-2 border-gray-900 flex items-center justify-center text-xs font-bold"
                >
                  +5
                </div>
              </div>
              <p class="text-sm text-gray-500 mt-2">Program Aktif</p>
            </div>
          </div>

          <!-- Standard Card -->
          <div
            class="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300 group"
          >
            <div class="flex justify-between items-start mb-6">
              <span
                class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-colors"
                >Sekbid 9</span
              >
              <svg
                class="w-8 h-8 text-gray-300 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Teknologi & Informasi
            </h3>
            <p class="text-gray-600 text-sm">
              Digitalisasi dan inovasi teknologi sekolah.
            </p>
          </div>

          <!-- Standard Card -->
          <div
            class="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300 group"
          >
            <div class="flex justify-between items-start mb-6">
              <span
                class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-colors"
                >Sekbid 8</span
              >
              <svg
                class="w-8 h-8 text-gray-300 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Sastra & Budaya
            </h3>
            <p class="text-gray-600 text-sm">
              Melestarikan budaya dan literasi.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section (Refined) -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-4xl font-black text-gray-900">GALERI</h2>
          <div class="hidden md:flex gap-2">
            <button
              class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
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
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
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
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <!-- Item 1 -->
          <div
            class="col-span-2 row-span-2 relative group overflow-hidden rounded-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              alt="Gallery"
            />
            <div
              class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"
            ></div>
            <div
              class="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <span
                class="text-white text-sm font-bold uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100"
                >Event</span
              >
              <h3 class="text-white text-3xl font-bold">Classmeeting 2024</h3>
            </div>
          </div>
          <!-- Item 2 -->
          <div
            class="col-span-1 row-span-1 relative group overflow-hidden rounded-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              alt="Gallery"
            />
          </div>
          <!-- Item 3 -->
          <div
            class="col-span-1 row-span-2 relative group overflow-hidden rounded-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              alt="Gallery"
            />
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-white text-xl font-bold">Seminar</h3>
            </div>
          </div>
          <!-- Item 4 -->
          <div
            class="col-span-1 row-span-1 relative group overflow-hidden rounded-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              alt="Gallery"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Suggestion Box & CTA -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-5xl font-black text-gray-900 mb-6">
              SUARA ANDA<br />INSPIRASI KAMI
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Punya ide cemerlang atau masukan untuk OSIS MPK? Sampaikan kepada
              kami. Kami mendengar, kami peduli.
            </p>

            <form class="space-y-4">
              <div>
                <label class="block text-sm font-bold text-gray-900 mb-1"
                  >Nama (Opsional)</label
                >
                <input
                  type="text"
                  class="w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors font-medium"
                  placeholder="Nama kamu"
                />
              </div>
              <div>
                <label class="block text-sm font-bold text-gray-900 mb-1"
                  >Pesan / Saran</label
                >
                <textarea
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-100 focus:border-gray-900 focus:outline-none transition-colors font-medium"
                  placeholder="Tulis saranmu disini..."
                ></textarea>
              </div>
              <button
                class="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all w-full md:w-auto"
              >
                Kirim Masukan
              </button>
            </form>
          </div>

          <div class="bg-gray-100 rounded-[3rem] p-12 text-center">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              Ingin Berkolaborasi?
            </h3>
            <p class="text-gray-600 mb-8">
              Kami selalu terbuka untuk kerjasama dengan pihak eksternal maupun
              internal.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-all"
            >
              Hubungi Kami
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home - OSIS MPK Ankasena",
});
</script>
