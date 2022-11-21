<template>
  <div id="Varela" class="w-full h-screen">
    <NuxtLink to="/" class="absolute">home</NuxtLink>
    <button class="btn" >{{ ans }} {{ randXs }} {{ randYs }} {{ f }} {{ formsColor }}</button>
    
        <input type="checkbox" id="my-modal-1" class="modal-toggle" v-model="modal_1"/>
        <div class="modal">
          <div class="modal-box bg-white w-11/12 max-w-5xl h-1/2">
            <h3 class="font-bold text-6xl text-center my-5">なにざんにする？</h3>
            <div class="h-3/4 flex justify-center items-center gap-12">
              <button @click="modalSwitch_1" class="btn btn-info bg-blue-100 w-2/5 h-3/4">
                <img src="./../assets/math_mark01_plus.png" alt="" class="w-32">
                <h3 class="text-4xl sm:text-5xl md:text-6xl">たしざん</h3>
              </button>
              <button @click="modalSwitch_1" class="btn btn-success bg-green-100 w-2/5 h-3/4" >
                <img src="./../assets/math_mark03_multiply.png" alt="" class="w-32">
                <h3 class="text-4xl sm:text-5xl md:text-6xl">かけざん</h3>
              </button>
            </div>
          </div>
        </div>

        <input type="checkbox" id="my-modal-2" class="modal-toggle" v-model="modal_2"/>
        <div class="modal">
          <div class="modal-box bg-white w-11/12 max-w-5xl h-1/2">
            <h3 class="font-bold text-6xl text-center my-5">なんますにする？</h3>
            <div class="h-3/4 flex justify-center items-center gap-12">
              <button @click="modalSwitch_2" class="btn btn-primary bg-indigo-100 w-2/5 h-3/4">
                <img src="./../assets/math_mark01_plus.png" alt="" class="w-32">
                <h3 class="text-6xl">4マス</h3>
              </button>
              <button @click="modalSwitch_2" class="btn btn-secondary bg-purple-100 w-2/5 h-3/4" >
                <img src="./../assets/math_mark03_multiply.png" alt="" class="w-32">
                <h3 class="text-6xl">9マス</h3>
              </button>
            </div>
          </div>
        </div>

        <div class="flex gap-12 p-10">
            <div class="w-3/4 h-[calc(100vh-80px)]">
                <ul class="flex w-full h-[33.33333%]">
                  <li class="text-[25vw] border rounded w-1/3 h-full flex justify-center items-center">
                    <p>{{ symbol }}</p>
                  </li>
                  <li v-for="randX in randXs" class="text-[16vw] pt-2 border rounded border-l-0 w-1/3 h-full flex justify-center items-center">
                    <p>{{ randX }}</p>
                  </li>
                </ul><!-- 計算記号と横の問題マス -->
                <div class="flex w-full h-[66.66666%]">
                  <ul class="w-1/3 h-full">
                    <li v-for="randY in randYs" class="text-[16vw] pt-2 border rounded border-t-0 w-full h-1/2 flex justify-center items-center">
                      <p>{{ randY }}</p>
                    </li>
                  </ul><!-- 縦の問題マス -->
                  <ul class="flex flex-wrap w-2/3 h-full">
                    <li id="form" v-for="form in forms" v-bind:class="{formsBgc: formsColor[f]}" 
                      class="border rounded border-t-0 border-l-0 w-1/2 h-1/2 flex justify-center items-center">
                      <input type="checkbox" v-model="formsColor[f]" :value="formsColor">
                      <p class="text-[16vw] pt-2" >{{ form }}</p>
                    </li>
                  </ul><!-- 回答マス -->
                </div>
            </div>

            <div class="w-1/4 h-[calc(100vh-80px)]">
              <div class="w-full h-2/5">
                <h2>なまえ：きしだ</h2>
                <h2>レベル：９９</h2>
                <hr>
                <h2>じかん</h2>
              </div> <!-- プロフ -->

              <ul class="flex flex-wrap h-3/5 mt-auto" >
                <div class="w-full h-1/5"></div>
                <button v-for="(numKey, index) in numKeys" @click="form_in(index)" class="btn w-1/3 h-1/5 text-[5vw]">
                  {{ numKey }}
                </button>
              </ul> <!-- 数値入力 -->
            </div> <!-- 右カラムの大枠 -->
        </div> <!-- 全体の大枠 -->
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'

// モーダル
onMounted(() => {
  modal_1.value = true
})

const modal_1 = ref(false)
const modal_2 = ref(false)

const modalSwitch_1 = () => {
  modal_1.value = false
  modal_2.value = true
}

const modalSwitch_2 = () => {
  modal_2.value = false
  randSet() // 問題生成
  ansSet() //　答え生成
}

const symbol = '+'

// 問題生成ロジック
const randXs: Ref<number[]> = ref([])
const randYs: Ref<number[]> = ref([])
const randSet = () => {
  for (let i = 0; i < 2; i++) {
    let randX = Math.floor(Math.random() * 9)
    randXs.value.push(randX)
    let randY = Math.floor(Math.random() * 9)
    randYs.value.push(randY)
  }
}
// 答え生成ロジック
const ans: Ref<string[]> = ref([])
const ansSet = () => {
  let x = 0
  let y = 0
  for (let j = 0; j < 2; j++) {
    ans.value.push(`${randXs.value[x] + randYs.value[y]}`)
    x++
  }
    x = 0
    y++
  for (let k = 0; k < 2; k++) {
    ans.value.push(`${randXs.value[x] + randYs.value[y]}`)
    x++
  }
}

// 入力装置
const numKeys = ref([1,2,3,4,5,6,7,8,9,'♪','けす',0]) //SVGを配列に入れて表示できたらそれがベスト

// 答え入力、答え合わせロジック
const forms = ref(['','','',''])
const formsColor: Ref<any> = ref([false,false,false,false])

let f = ref(0) // フォームの位置を決める数字

const form_in = (index: number) => {
  if (numKeys.value[index] === '♪') { // 音符が押されたら
    alert('ピンポン')
  } else if (numKeys.value[index] === 'けす') { // けすが押されたら
    forms.value[f.value] = ''
  } else { // 数字が押されたら
    if (forms.value[f.value].length < 2) { // 二文字制限
      forms.value[f.value] += numKeys.value[index] // 数値入力
      if (forms.value[f.value] === ans.value[f.value]) { // 答えが合っていたら
        f.value++ // フォームの位置をずらす
        formsColor.value[f.value] = !formsColor.value[f.value] // 色を変える
      } else {} // 答えが間違っていたら何もしない
    } else {} // ３文字目を入力すると、間違えてるとポップアップを出したい
  } 
}


</script>

<style>

li {
  list-style: none;
}

.formsBgc {
  background-color: red;
}


</style>