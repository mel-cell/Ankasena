<template>
  <div class="container mx-auto px-4 py-12 max-w-2xl">
    <h1 class="text-4xl font-bold mb-8 text-center">Kotak Saran</h1>
    <p class="text-center text-gray-600 dark:text-gray-400 mb-8">
      Kami menghargai masukan Anda. Silakan kirimkan saran atau kritik untuk
      kemajuan organisasi.
    </p>

    <form
      @submit.prevent="submitSuggestion"
      class="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div>
        <label
          for="subject"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >Subjek</label
        >
        <input
          v-model="form.subject"
          type="text"
          id="subject"
          required
          class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="Topik saran Anda"
        />
      </div>

      <div>
        <label
          for="message"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >Pesan</label
        >
        <textarea
          v-model="form.message"
          id="message"
          rows="5"
          required
          class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="Tuliskan saran Anda secara detail..."
        ></textarea>
      </div>

      <div class="flex items-center">
        <input
          v-model="form.isAnonymous"
          type="checkbox"
          id="isAnonymous"
          class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label
          for="isAnonymous"
          class="ml-2 block text-sm text-gray-700 dark:text-gray-300"
        >
          Kirim sebagai anonim
        </label>
      </div>

      <div v-if="!form.isAnonymous">
        <label
          for="submittedBy"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >Nama Anda</label
        >
        <input
          v-model="form.submittedBy"
          type="text"
          id="submittedBy"
          class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="Nama Lengkap"
        />
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ loading ? "Mengirim..." : "Kirim Saran" }}
      </button>

      <div
        v-if="success"
        class="p-4 bg-green-100 text-green-700 rounded-lg text-center"
      >
        Terima kasih! Saran Anda telah berhasil dikirim.
      </div>
      <div
        v-if="error"
        class="p-4 bg-red-100 text-red-700 rounded-lg text-center"
      >
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
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
    await $fetch(`${config.public.payloadUrl}/api/suggestions`, {
      method: "POST",
      body: form,
    });
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
