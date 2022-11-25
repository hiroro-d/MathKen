<template>
  <ul class="flex flex-wrap h-3/5 mt-auto" >
    <div class="w-full h-1/5"></div>
    <button v-for="(numKey, index) in numKeys" @click="form_in(index)" class="btn w-1/3 h-1/5 text-[5vw]">
      {{ numKey }}
    </button>
  </ul> <!-- 数値入力 -->
</template>

<script setup>

const numKeys = ref([1,2,3,4,5,6,7,8,9,'♪','x',0])

</script>