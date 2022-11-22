<template>
  <div>
    <div class="flex gap-12 p-10">
      <div class="w-3/4 h-[calc(100vh-80px)]">
          <ul class="flex w-full h-[33.33333%]">
            <li class="text-[25vw] border rounded w-1/3 h-full flex justify-center items-center">
              <svg v-if="symbol === '+'" xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              <svg v-else-if="symbol === 'x'" xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </li><!-- 計算記号のマス -->
            <li v-for="randX in randXs" class="text-[16vw] pt-2 border rounded border-l-0 w-1/3 h-full flex justify-center items-center">
              <p>{{ randX }}</p>
            </li>
          </ul><!-- 横の問題マス -->
          <div class="flex w-full h-[66.66666%]">
            <ul class="w-1/3 h-full">
              <li v-for="randY in randYs" class="text-[16vw] pt-2 border rounded border-t-0 w-full h-1/2 flex justify-center items-center">
                <p>{{ randY }}</p>
              </li>
            </ul><!-- 縦の問題マス -->
            <ul class="flex flex-wrap w-2/3 h-full">
              <li id="form" v-for="(form, indexF) in forms" v-bind:class="{formsBgc: formsColor[indexF]}" 
                class="border rounded border-t-0 border-l-0 w-1/2 h-1/2 flex justify-center items-center">
                <input type="checkbox" v-model="formsColor[indexF]" :value="formsColor" class="hidden">
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

    <input type="checkbox" id="my-modal-3" class="modal-toggle" v-model="modal_3"/>
    <div class="modal">
      <div class="modal-box bg-white w-11/12 max-w-5xl h-1/2 opacity-0.5">
        <h3 class="font-bold text-6xl text-center my-5">おめでとう！！</h3>
        <div class="h-3/4 flex justify-center items-center gap-12">
          <NuxtLink to="/" class="w-full h-full">
            <button @click="randSet()" class="btn btn-primary bg-indigo-100 w-1/5 h-3/4">
              <h3>もういっかい</h3>
            </button>
          </NuxtLink>
          <NuxtLink to="/" class="w-full h-full">
            <button @click="randSet" class="btn btn-secondary bg-purple-100 w-1/5 h-3/4" >
              <h3>えらびなおす</h3>
            </button>
          </NuxtLink>
          <NuxtLink to="/" class="w-full h-full">
            <button @click="randSet" class="btn btn-secondary bg-purple-100 w-1/5 h-3/4" >
              <h3>やめる</h3>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div><!-- 解き終えた後のモーダル -->
  </div>
</template>

<script setup lang="ts">

import { Ref } from 'Vue'
import { useModal } from '../composables/useModal'
const { symbol, cells, modal_3, formsColor, } = useModal()

//問題生成ロジック

onMounted(() => {
  randSet()
  ansSet()
  formSet()
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
const numKeys = ref([1,2,3,4,5,6,7,8,9,'♪','けす',0]) //SVGを配列に入れて表示できたらそれがベスト

// 答え入力、答え合わせロジック
const forms: Ref<string[]> = ref([])
const formSet = () => {
  for (let i = 0; i < cells.value; i++)
  forms.value.push('')
}

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
        formsColor.value[f.value] = !formsColor.value[f.value] // 今の位置の色を変える
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

//同一ページか別ページか　同一ページはフォントサイズがめんどい　別ページはページ管理が4つ

</script>