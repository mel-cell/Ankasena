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
              >Tentang Kami</span
            >
            <h1
              class="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase"
            >
              PROFIL<br />
              <span class="text-gray-400">ANKASENA</span>
            </h1>
          </div>

          <!-- Right: Description -->
          <div class="lg:col-span-5">
            <p class="text-xl text-gray-600 leading-relaxed font-medium">
              Mengenal lebih dekat sejarah, nilai-nilai, dan orang-orang di
              balik penggerak kegiatan siswa SMA Negeri 1 Ankasena.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- History Section -->
    <section class="py-24 bg-gray-50 border-y border-gray-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="School Building"
              />
            </div>
            <div
              class="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-gray-100"
            >
              <p class="text-4xl font-black text-gray-900 mb-1">57</p>
              <p
                class="text-sm font-bold text-gray-500 uppercase tracking-wider"
              >
                Tahun Mengabdi
              </p>
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-black text-gray-900 mb-6">
              SEJARAH SINGKAT
            </h2>
            <div class="prose prose-lg text-gray-600">
              <p class="mb-6">
                OSIS MPK Ankasena berdiri sejak tahun 1967, seiring dengan
                berdirinya SMA Negeri 1 Ankasena. Nama "Ankasena" diambil dari
                bahasa Sanskerta yang berarti "Prajurit Angkasa", melambangkan
                cita-cita siswa yang tinggi menjulang namun tetap membumi dalam
                pengabdian.
              </p>
              <p>
                Selama lebih dari setengah abad, organisasi ini telah melahirkan
                ribuan pemimpin muda yang kini tersebar di berbagai sektor
                strategis bangsa. Kami terus berevolusi, beradaptasi dengan
                zaman, namun tetap memegang teguh nilai-nilai luhur yang
                diwariskan oleh para pendahulu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission (Reused Style) -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-black text-gray-900 mb-4">VISI & MISI</h2>
          <div class="h-1 w-24 bg-gray-900 mx-auto"></div>
        </div>

        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Visi -->
          <div
            class="lg:col-span-1 bg-gray-900 text-white p-10 rounded-3xl relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 p-32 bg-white/5 rounded-full -mr-16 -mt-16"
            ></div>
            <span
              class="inline-block px-3 py-1 bg-white/20 rounded-lg text-xs font-bold uppercase tracking-wider mb-6"
              >Visi Utama</span
            >
            <h3 class="text-2xl font-bold leading-relaxed">
              "Menjadikan OSIS MPK sebagai organisasi yang inklusif, aspiratif,
              dan progresif dalam membangun karakter siswa."
            </h3>
          </div>

          <!-- Misi -->
          <div class="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div
              class="p-8 border border-gray-200 rounded-3xl hover:border-gray-900 transition-colors group"
            >
              <span
                class="text-5xl font-black text-gray-200 group-hover:text-gray-900 transition-colors mb-4 block"
                >01</span
              >
              <h4 class="text-xl font-bold text-gray-900 mb-2">
                Ketaqwaan & Akhlak
              </h4>
              <p class="text-gray-600 text-sm">
                Meningkatkan keimanan dan ketaqwaan serta budi pekerti luhur
                seluruh siswa.
              </p>
            </div>
            <div
              class="p-8 border border-gray-200 rounded-3xl hover:border-gray-900 transition-colors group"
            >
              <span
                class="text-5xl font-black text-gray-200 group-hover:text-gray-900 transition-colors mb-4 block"
                >02</span
              >
              <h4 class="text-xl font-bold text-gray-900 mb-2">
                Potensi & Bakat
              </h4>
              <p class="text-gray-600 text-sm">
                Mewadahi dan mengembangkan minat, bakat, serta potensi siswa
                dalam berbagai bidang.
              </p>
            </div>
            <div
              class="p-8 border border-gray-200 rounded-3xl hover:border-gray-900 transition-colors group"
            >
              <span
                class="text-5xl font-black text-gray-200 group-hover:text-gray-900 transition-colors mb-4 block"
                >03</span
              >
              <h4 class="text-xl font-bold text-gray-900 mb-2">Solidaritas</h4>
              <p class="text-gray-600 text-sm">
                Membangun rasa kekeluargaan dan solidaritas yang kuat antar
                warga sekolah.
              </p>
            </div>
            <div
              class="p-8 border border-gray-200 rounded-3xl hover:border-gray-900 transition-colors group"
            >
              <span
                class="text-5xl font-black text-gray-200 group-hover:text-gray-900 transition-colors mb-4 block"
                >04</span
              >
              <h4 class="text-xl font-bold text-gray-900 mb-2">Inovasi</h4>
              <p class="text-gray-600 text-sm">
                Menciptakan program kerja yang inovatif dan relevan dengan
                perkembangan zaman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organizational Structure (BPH) -->
    <section class="py-24 bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span
            class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block"
            >Badan Pengurus Harian</span
          >
          <h2 class="text-4xl font-black text-gray-900">STRUKTUR ORGANISASI</h2>
        </div>

        <!-- Tree Layout -->
        <div class="flex flex-col items-center space-y-12">
          <!-- Level 1: Ketua -->
          <div class="flex justify-center">
            <div
              class="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center w-64 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                class="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-900">Aditya Pratama</h3>
              <p
                class="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1"
              >
                Ketua OSIS
              </p>
            </div>
          </div>

          <!-- Connector -->
          <div class="w-px h-8 bg-gray-300"></div>

          <!-- Level 2: Wakil -->
          <div class="flex justify-center">
            <div
              class="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center w-64 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                class="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-900">Nadia Safitri</h3>
              <p
                class="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1"
              >
                Wakil Ketua
              </p>
            </div>
          </div>

          <!-- Connector -->
          <div class="w-px h-8 bg-gray-300"></div>
          <div class="w-1/2 h-px bg-gray-300 relative">
            <div class="absolute left-0 top-0 w-px h-8 bg-gray-300"></div>
            <div class="absolute right-0 top-0 w-px h-8 bg-gray-300"></div>
          </div>

          <!-- Level 3: Sekben -->
          <div class="flex justify-center gap-8 md:gap-24">
            <div
              class="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center w-64 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                class="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-900">Rina Wulandari</h3>
              <p
                class="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1"
              >
                Sekretaris Umum
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center w-64 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                class="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-900">Budi Santoso</h3>
              <p
                class="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1"
              >
                Bendahara Umum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Profil - OSIS MPK Ankasena",
});
</script>
