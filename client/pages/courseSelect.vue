<template>
  <div>
    <input type="checkbox" id="my-modal-1" class="modal-toggle" v-model="modal_1"/>
    <div class="modal">
      <div class="modal-box bg-white w-11/12 max-w-[80%] h-[65%]">
        <h3 class="font-bold text-[7vw] text-center mt-5 mb-10">なにざんにする？</h3>
        <div class="h-[65%] flex justify-center items-center gap-12">
          <button @click="modalSwitch_plus" class="w-2/5 h-full flex flex-col gap-[3rem] py-3 px-4 justify-center items-center rounded-md border-2 border-gray-200 font-semibold text-gray-700 hover:bg-gray-100 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm  dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
            <img src="../assets/addition.png" alt="足し算のイラスト" class="w-48">
            <h3 class="text-[5vw] pb-4">たしざん</h3>
          </button>
          <button @click="modalSwitch_multi" class="w-2/5 h-full flex flex-col gap-[3rem] py-3 px-4 justify-center items-center rounded-md border-2 border-gray-200 font-semibold text-gray-700 hover:bg-gray-100 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm  dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
            <img src="../assets/multiplication.png" alt="かけ算のイラスト" class="w-48">
            <h3 class="text-[5vw] pb-4">かけざん</h3>
          </button>
        </div>
      </div>
    </div>

    <input type="checkbox" id="my-modal-2" class="modal-toggle" v-model="modal_2"/>
    <div class="modal">
      <div class="modal-box bg-white w-11/12 max-w-[80%] h-[65%]">
        <h3 class="font-bold text-[7vw] text-center my-5 mb-10">なんますにする？</h3>
        <div class="flex gap-12 h-[65%] justify-center">
          <NuxtLink to="/fourCell" class="w-2/5 h-full flex justify-center items-center">
            <button @click="modalSwitch_4cell" class="w-full h-full flex flex-col gap-[3rem] py-3 px-4 justify-center items-center rounded-md border-2 border-gray-200 font-semibold text-gray-700 hover:bg-gray-100 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm  dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
              <img src="../assets/fourCell.svg" alt="" class="w-48">
              <h3 class="text-[5vw] pb-4">4マス</h3>
            </button>
          </NuxtLink>
          <NuxtLink to="/nineCell" class="w-2/5 h-full flex justify-center items-center gap-12">
            <button @click="modalSwitch_9cell" class="w-full h-full flex flex-col gap-[3rem] py-3 px-4 justify-center items-center rounded-md border-2 border-gray-200 font-semibold text-gray-700 hover:bg-gray-100 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm  dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800" >
              <img src="../assets/ninecell.svg" alt="" class="w-48">
              <h3 class="text-[5vw] pb-4">9マス</h3>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModal } from '../composables/useModal'
const { symbol, cells, modal_1, modal_2, modalSwitch_plus, modalSwitch_multi, modalSwitch_4cell, modalSwitch_9cell } = useModal()

onMounted(() => {
  modal_1.value = true
})




</script>