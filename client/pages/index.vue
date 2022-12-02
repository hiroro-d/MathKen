<template>
  <div class="flex">
    <NuxtLink to="/ranking">aaa</NuxtLink>
    <div class="w-1/2 h-screen flex flex-col items-center justify-center">
      <p class="mb-10 text-5xl">ぐんぐんのびる</p>
      <p class="mb-20 text-8xl font-bold">ます・けん</p>
      <NuxtLink to="/courseSelect">
        <button
          type="button"
          class="w-60 h-20 mb-10 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-4xl pb-1"
        >
          やってみる
        </button>
      </NuxtLink>
      <NuxtLink to="/login">
      <button type="button"
        class="w-60 h-20 mb-10 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-green-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-4xl pb-1">
        ログイン
      </button>
      </NuxtLink>
      <NuxtLink to="/signup">
      <button type="button"
        class="w-60 h-20 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-yellow-100 border border-transparent font-semibold text-yellow-500 hover:text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-yellow-500 focus:ring-offset-2 transition-all text-4xl pb-1">
        とうろく
      </button>
      </NuxtLink>
    </div>

    <div class="w-1/2 h-screen">
      <img src="../assets/MainVisual2.jpg" alt="" class="w-full h-auto object-cover">
      <img src="../assets/MainVisual.jpg" alt="" class="w-full h-auto object-cover">
    </div>
  </div>
</template>

<script setup>

</script>