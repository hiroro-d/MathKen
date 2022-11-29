<template>
  <div>
<!-- 全体の大枠 -->
    <div class="flex gap-12 p-10">
      <div class="w-3/4 h-[calc(100vh-80px)]">
          <ul class="flex w-full h-[33.33333%] bg-green-100">
            <li class="text-[25vw] border-4 border-gray-400 w-1/3 h-full flex justify-center items-center">
              <svg v-if="symbol === '+'" xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              <svg v-else-if="symbol === 'x'" xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </li><!-- 計算記号のマス -->
            <li v-for="randX in randXs" class="text-[16vw] pt-2 border-4 border-l-0 border-gray-400 w-1/3 h-full flex justify-center items-center">
              <p>{{ randX }}</p>
            </li>
          </ul><!-- 横の問題マス -->
          <div class="flex w-full h-[66.66666%]">
            <ul class="w-1/3 h-full bg-green-100">
              <li v-for="randY in randYs" class="text-[16vw] pt-2 border-4 border-t-0 border-gray-400 w-full h-1/2 flex justify-center items-center">
                <p>{{ randY }}</p>
              </li>
            </ul><!-- 縦の問題マス -->
            <ul class="flex flex-wrap w-2/3 h-full">
              <li id="form" v-for="(form, indexF) in forms" v-bind:class="{formsBgc: formsColor[indexF]}" 
                class="border-4 border-t-0 border-l-0 border-gray-400 w-1/2 h-1/2 relative">
                <input type="checkbox" v-model="formsColor[indexF]" :value="formsColor" class="hidden">
                <p class="text-[16vw] pt-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" >{{ form }}</p>
                <img v-if="collectImg[indexF]" src="../assets/collectMark.png" alt="" 
                  class="max-w-[150%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"  :class="'collect_anim'"
                >
              </li>
            </ul><!-- 回答マス -->
          </div>
      </div>

      <div class="w-1/4 h-[calc(100vh-80px)]">
<!-- 右カラムの大枠 -->
        <div class="w-full h-2/5">
<!-- プロフ-->
          <div class="card border-2 w-full bg-base-100 shadow-xl pt-6 flex justify-center items-center">
            <div class="avatar">
              <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div class="card-body">
              <h2 class="card-title border-b-2 m-auto">
                きしだふみお
              </h2>
              <p class="mt-2">レベル：{{ 'level' }}</p>
              <p>後{{ 'nextLV' }}回でレベルアップ</p>
            </div>
          </div>
<!-- 時間 -->

          <div class="card flex flex-col items-center justify-center mt-3 border-2 w-full h-1/3 bg-base-100 shadow-xl">
            <div class="">
              <h2 class="card-title">じかん</h2>
              <div class="flex gap-3 text-[1.3rem]">
                <div class="min-w-[1.6rem] text-right">{{ minute }}</div><div>ふん</div><div class="min-w-[1.6rem] text-right">{{ second }}</div><div>びょう</div>
              </div>
            </div>
          </div>
        </div>
<!-- 数値入力 -->
        <ul class="flex flex-wrap h-3/5 mt-auto" >
          <div class="w-full h-1/5"></div>
          <button v-for="(numKey, index) in numKeys" @click="form_in(index)" class="btn border-none w-1/3 h-1/5 text-[5vw] relative py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border-white font-semibold text-blue-500 hover:text-white hover:bg-blue-500 pb-1">
            {{ numKey }}
            <svg id="eraser" v-if="eraser[index] === true" xmlns="http://www.w3.org/2000/svg" fill="#3b82f6" class="bi bi-eraser py-4 w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" viewBox="0 0 16 16">
              <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 
              15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 
              0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 
              1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
            </svg>
          </button>
        </ul>

      </div>
    </div>

<!-- 解く前のモーダル -->
    <input type="checkbox" id="my-modal-4" class="modal-toggle" v-model="modal_4"/>
    <div class="modal">
      <div class="modal-box bg-white w-1/2 max-w-5xl h-1/3 opacity-0.5">

        <p>はじめてもいい？</p>
        <button @click="gameStart()" class="btn">OK!</button>
        <NuxtLink to="/courseSelect" class="w-full h-full">
          <button @click="" class="btn btn-secondary bg-purple-100">
            えらびなおす
          </button>
        </NuxtLink>
      </div>
    </div>

<!-- 解き終えた後のモーダル -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" v-model="modal_3"/>
    <div class="modal">
      <div class="modal-box bg-white w-11/12 max-w-5xl h-1/2 opacity-0.5">
        <h3 class="font-bold text-6xl text-center my-5">おめでとう！！</h3>
        <div class="h-3/4 flex justify-center items-center gap-12">
          <NuxtLink to="/" class="w-full h-full">
            <button @click="" class="btn btn-primary bg-indigo-100 w-1/5 h-3/4">
              <h3>もういっかい</h3>
            </button>
          </NuxtLink>
          <NuxtLink to="/courseSelect" class="w-full h-full">
            <button @click="" class="btn btn-secondary bg-purple-100 w-1/5 h-3/4" >
              <h3>えらびなおす</h3>
            </button>
          </NuxtLink>
          <NuxtLink to="/" class="w-full h-full">
            <button @click="" class="btn btn-secondary bg-purple-100 w-1/5 h-3/4" >
              <h3>やめる</h3>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import { Ref } from 'Vue'
import { useModal } from '../composables/useModal'
const { symbol, cells, modal_3, modal_4, formsColor, } = useModal()

//問題生成ロジック

onMounted(() => {
  randSet()
  ansSet()
  formSet()
  formsColor.value[0] = true
  modal_4.value = true
})

const randXs: Ref<number[]> = ref([])
const randYs: Ref<number[]> = ref([])
const randSet = () => {
  for (let i = 0; i < cells.value / 2; i++) {
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
  for (let j = 0; j < cells.value / 2; j++) {
    if (symbol.value === '+') {
      ans.value.push(`${randXs.value[x] + randYs.value[y]}`)
    } else if (symbol.value = 'x') {
      ans.value.push(`${randXs.value[x] * randYs.value[y]}`)
    } else {} // 引き算を実装予定
    x++
  }
    x = 0
    y++
  for (let k = 0; k < cells.value / 2; k++) {
    if (symbol.value === '+') {
      ans.value.push(`${randXs.value[x] + randYs.value[y]}`)
    } else if (symbol.value = 'x') {
      ans.value.push(`${randXs.value[x] * randYs.value[y]}`)
    } else {} // 引き算を実装予定
    x++
  }
}

// 入力装置
const numKeys = ref([1,2,3,4,5,6,7,8,9,'♪','',0]) // SVGを配列に入れて表示できたらそれがベスト
const eraser = ref([false,false,false,false,false,false,false,false,false,false,true,false,])

// 答え入力、答え合わせロジック
const forms: Ref<string[]> = ref([])
const formSet = () => {
  for (let i = 0; i < cells.value; i++)
  forms.value.push('')
}

let f = ref(0) // フォームの位置を決める数字
const collectImg = ref([false, false, false, false])

const form_in = (index: number) => {
  if (numKeys.value[index] === '♪') { // 音符が押されたら
    alert('ザ・ワールド!!')
  } else if (numKeys.value[index] === '') { // けすが押されたら
    forms.value[f.value] = ''
  } else { // 数字が押されたら
    if (forms.value[f.value].length < 2) { // 二文字制限
      forms.value[f.value] += numKeys.value[index] // 数値入力
      if (forms.value[f.value] === ans.value[f.value]) { // 答えが合っていたら
        formsColor.value[f.value] = !formsColor.value[f.value] // 今の位置の色を変える
        collectImg.value[f.value] = !collectImg.value[f.value]
        if ( f.value < 3 ) {
          f.value++ // フォームの位置をずらす
          formsColor.value[f.value] = !formsColor.value[f.value] 
        } else {
          modal_3.value = true
        } // モーダルを出す----------------------------------------------後で追加
      } else {} // 答えが間違っていたら何もしない
    } else {} // ３文字目を入力すると、間違えてるとポップアップを出したい
  } 
}

//timer 分と秒の表示と追加
let second = ref(0)
let minute = ref(0)

//timer 動作処理
  const gameStart = () => {
    modal_4.value = false;
    let timerId = setInterval(() => {
      second.value++
      if (second.value % 60 === 0) {
        minute.value++
        second.value -= 60
      }
    }, 1000)
  }

</script>

<style>

#eraser:hover {
  fill: white;
}

.collect_anim {
  animation: collect_anim 0.3s;
  opacity: 1;
}

@keyframes collect_anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>