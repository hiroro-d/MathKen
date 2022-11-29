<template>
  <div>
    <input type="checkbox" id="my-modal-1" class="modal-toggle" v-model="modal_1"/>
    <div class="modal">
      <div class="modal-box bg-white w-11/12 max-w-[80%] h-4/5">
        <h3 class="font-bold text-[7vw] text-center my-5">なにざんにする？</h3>
        <div class="h-[50%] flex justify-center items-center gap-12">
          <button @click="modalSwitch_plus" class="btn btn-info bg-blue-100 w-2/5 h-full flex flex-col gap-[3rem]">
            <img src="./../assets/math_mark01_plus.png" alt="" class="w-32">
            <h3 class="text-[5vw] pb-4">たしざん</h3>
          </button>
          <button @click="modalSwitch_multi" class="btn btn-info bg-blue-100 w-2/5 h-full flex flex-col gap-[3rem]">
            <img src="./../assets/math_mark03_multiply.png" alt="" class="w-32">
            <h3 class="text-[5vw] pb-4">かけざん</h3>
          </button>
        </div>
      </div>
    </div>

    <input type="checkbox" id="my-modal-2" class="modal-toggle" v-model="modal_2"/>
    <div class="modal">
      <div class="modal-box bg-white w-11/12 max-w-[80%] h-4/5">
        <h3 class="font-bold text-[7vw] text-center my-5">なんますにする？</h3>
        <div class="flex gap-10 h-1/2">
          <NuxtLink to="/fourCell" class="w-1/2 h-full flex justify-center items-center gap-12">
            <button @click="modalSwitch_4cell" class="btn btn-info bg-blue-100 w-full h-full flex flex-col gap-[3rem]">
              <img src="./../assets/math_mark01_plus.png" alt="" class="w-32">
              <h3 class="text-[5vw] pb-4">4マス</h3>
            </button>
          </NuxtLink>
          <NuxtLink to="/nineCell" class="w-1/2 h-full flex justify-center items-center gap-12">
            <button @click="modalSwitch_9cell" class="btn btn-info bg-blue-100 w-full h-full flex flex-col gap-[3rem]" >
              <img src="./../assets/math_mark03_multiply.png" alt="" class="w-32">
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