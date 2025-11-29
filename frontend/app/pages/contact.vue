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
              >Hubungi Kami</span
            >
            <h1
              class="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase"
            >
              KOTAK SARAN<br />
              <span class="text-gray-400">& KONTAK</span>
            </h1>
          </div>

          <!-- Right: Description -->
          <div class="lg:col-span-5">
            <p class="text-xl text-gray-600 leading-relaxed font-medium">
              Kami selalu terbuka untuk mendengar aspirasi, kritik, dan saran
              yang membangun demi kemajuan OSIS MPK Ankasena.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-24">
        <!-- Left Column: Contact Info & Map -->
        <div class="lg:col-span-5 space-y-12">
          <!-- Info Cards -->
          <div class="space-y-6">
            <div class="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Sekretariat OSIS
              </h3>
              <p class="text-gray-600">
                Gedung A, Lantai 1<br />
                SMA Negeri 1 Ankasena<br />
                Jl. Pendidikan No. 123, Kota Pelajar
              </p>
            </div>

            <div class="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Email & Media Sosial
              </h3>
              <div class="space-y-2">
                <a
                  href="mailto:osis@ankasena.sch.id"
                  class="block text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >osis@ankasena.sch.id</a
                >
                <a
                  href="#"
                  class="block text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >@osis.ankasena (Instagram)</a
                >
                <a
                  href="#"
                  class="block text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >OSIS MPK Ankasena (YouTube)</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="lg:col-span-7">
          <form @submit.prevent="submitSuggestion" class="space-y-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label
                  for="name"
                  class="text-sm font-bold text-gray-900 uppercase tracking-wider"
                  >Nama Lengkap</label
                >
                <input
                  v-model="form.submittedBy"
                  type="text"
                  id="name"
                  class="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-gray-900 outline-none transition-colors font-medium text-lg placeholder-gray-400"
                  placeholder="Masukkan nama anda"
                  :disabled="form.isAnonymous"
                />
              </div>
              <div class="space-y-2">
                <label
                  for="subject"
                  class="text-sm font-bold text-gray-900 uppercase tracking-wider"
                  >Subjek</label
                >
                <input
                  v-model="form.subject"
                  type="text"
                  id="subject"
                  required
                  class="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-gray-900 outline-none transition-colors font-medium text-lg placeholder-gray-400"
                  placeholder="Topik saran"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label
                for="message"
                class="text-sm font-bold text-gray-900 uppercase tracking-wider"
                >Pesan / Saran</label
              >
              <textarea
                v-model="form.message"
                id="message"
                rows="6"
                required
                class="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-gray-900 outline-none transition-colors font-medium text-lg placeholder-gray-400 resize-none"
                placeholder="Tuliskan aspirasi anda disini..."
              ></textarea>
            </div>

            <div class="flex items-center gap-3">
              <div class="relative flex items-start">
                <div class="flex h-6 items-center">
                  <input
                    v-model="form.isAnonymous"
                    id="anonymous"
                    type="checkbox"
                    class="h-5 w-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                  />
                </div>
                <div class="ml-3 text-sm leading-6">
                  <label for="anonymous" class="font-medium text-gray-900"
                    >Kirim sebagai Anonim</label
                  >
                  <p class="text-gray-500">
                    Identitas anda akan dirahasiakan sepenuhnya.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="inline-flex items-center justify-center px-10 py-5 bg-gray-900 text-white font-bold text-lg rounded-xl hover:bg-gray-800 transition-all w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ loading ? "Mengirim..." : "Kirim Pesan" }}
              <svg
                v-if="!loading"
                class="w-5 h-5 ml-2"
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
            </button>

            <!-- Alerts -->
            <div
              v-if="success"
              class="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3"
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
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Saran anda berhasil dikirim. Terima kasih atas masukan anda!
            </div>
            <div
              v-if="error"
              class="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center gap-3"
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
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              {{ error }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Kontak - OSIS MPK Ankasena",
});

const config = useRuntimeConfig();
const loading = ref(false);
const success = ref(false);
const error = ref("");

const form = reactive({
  subject: "",
  message: "",
  isAnonymous: false,
  submittedBy: "",
});

const submitSuggestion = async () => {
  loading.value = true;
  error.value = "";
  success.value = false;

  try {
    // Simulate API call for now if endpoint doesn't exist yet
    // await $fetch(`${config.public.payloadUrl}/api/suggestions`, {
    //   method: "POST",
    //   body: form,
    // });

    // Mock success for UI demo
    await new Promise((resolve) => setTimeout(resolve, 1000));

    success.value = true;
    form.subject = "";
    form.message = "";
    form.submittedBy = "";
    form.isAnonymous = false;
  } catch (e: any) {
    error.value =
      e.data?.errors?.[0]?.message || "Terjadi kesalahan saat mengirim saran.";
  } finally {
    loading.value = false;
  }
};
</script>
