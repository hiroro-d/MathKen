<template>
  <div class="varela text-gray-700">
    <NuxtPage />
  </div>
</template>

<style>

.varela {
  font-family: 'Varela Round', sans-serif;
}

li {
  list-style: none;
}

/* 問題のマス目の色用 */
.formsBgc { 
  background-color: rgba(238, 178, 178, 0.729);
  animation: collect_anim 0.5s;
  opacity: 1;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>