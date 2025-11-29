<template>
  <div class="bg-white min-h-screen pt-32 pb-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-20">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <!-- Left: Title -->
          <div class="lg:col-span-7">
            <span
              class="inline-block px-4 py-1.5 bg-gray-900 text-white text-xs font-bold tracking-widest uppercase mb-6"
              >Struktur Organisasi</span
            >
            <h1
              class="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase"
            >
              SEKSI<br />
              <span class="text-gray-400">BIDANG</span>
            </h1>
          </div>

          <!-- Right: Description -->
          <div class="lg:col-span-5">
            <p class="text-xl text-gray-600 leading-relaxed font-medium">
              Ujung tombak eksekusi program kerja OSIS MPK Ankasena. Terbagi
              menjadi 10 bidang strategis yang mencakup seluruh aspek
              pengembangan siswa.
            </p>
          </div>
        </div>
      </div>

      <!-- Divisions Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(sekbid, index) in sekbids"
          :key="index"
          class="group p-8 rounded-3xl border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300 bg-white"
        >
          <div class="flex justify-between items-start mb-8">
            <span
              class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-colors"
            >
              Sekbid {{ index + 1 }}
            </span>
            <div
              class="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors"
            >
              <component :is="sekbid.icon" class="w-6 h-6" />
            </div>
          </div>

          <h3
            class="text-2xl font-bold text-gray-900 mb-4 group-hover:underline decoration-2 underline-offset-4"
          >
            {{ sekbid.title }}
          </h3>
          <p class="text-gray-600 mb-8 leading-relaxed">
            {{ sekbid.description }}
          </p>

          <div class="flex items-center gap-3 pt-6 border-t border-gray-100">
            <div class="flex -space-x-3">
              <div
                class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
              ></div>
              <div
                class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
              ></div>
              <div
                class="w-8 h-8 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
              >
                +{{ sekbid.members }}
              </div>
            </div>
            <span class="text-sm font-medium text-gray-500">Anggota Aktif</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HeartIcon,
  UserGroupIcon,
  FlagIcon,
  AcademicCapIcon,
  SparklesIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  LanguageIcon,
} from "@heroicons/vue/24/outline";

useHead({
  title: "Sekbid - OSIS MPK Ankasena",
});

// Mock Data for Sekbids
const sekbids = [
  {
    title: "Ketaqwaan & Rohani",
    description:
      "Membina ketaqwaan terhadap Tuhan Yang Maha Esa dan toleransi dalam kehidupan beragama di lingkungan sekolah.",
    icon: HeartIcon,
    members: 12,
  },
  {
    title: "Budi Pekerti Luhur",
    description:
      "Membangun karakter siswa yang berbudi pekerti luhur, sopan santun, dan beretika dalam pergaulan.",
    icon: UserGroupIcon,
    members: 10,
  },
  {
    title: "Wawasan Kebangsaan",
    description:
      "Menanamkan jiwa patriotisme, nasionalisme, dan cinta tanah air melalui kegiatan upacara dan peringatan hari besar.",
    icon: FlagIcon,
    members: 15,
  },
  {
    title: "Prestasi Akademik",
    description:
      "Meningkatkan prestasi akademik siswa melalui kompetisi, pelatihan, dan kelompok belajar sebaya.",
    icon: AcademicCapIcon,
    members: 8,
  },
  {
    title: "Demokrasi & HAM",
    description:
      "Mengembangkan wawasan kebangsaan, demokrasi, dan hak asasi manusia serta pendidikan politik siswa.",
    icon: GlobeAltIcon,
    members: 11,
  },
  {
    title: "Kreativitas & Kewirausahaan",
    description:
      "Menumbuhkan jiwa kewirausahaan dan kreativitas siswa dalam menciptakan produk dan jasa yang bernilai.",
    icon: BriefcaseIcon,
    members: 14,
  },
  {
    title: "Kualitas Jasmani",
    description:
      "Meningkatkan kesehatan jasmani dan prestasi olahraga siswa melalui berbagai kegiatan olahraga.",
    icon: SparklesIcon,
    members: 20,
  },
  {
    title: "Sastra & Budaya",
    description:
      "Melestarikan dan mengembangkan seni budaya serta kemampuan sastra siswa.",
    icon: BookOpenIcon,
    members: 13,
  },
  {
    title: "Teknologi Informasi",
    description:
      "Memanfaatkan teknologi informasi dan komunikasi untuk mendukung kegiatan pembelajaran dan organisasi.",
    icon: ComputerDesktopIcon,
    members: 9,
  },
  {
    title: "Komunikasi Bahasa",
    description:
      "Meningkatkan kemampuan berbahasa asing siswa, khususnya Bahasa Inggris, sebagai bekal global.",
    icon: LanguageIcon,
    members: 10,
  },
];
</script>
