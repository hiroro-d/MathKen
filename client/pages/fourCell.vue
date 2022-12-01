<template>
  <div class="relative">
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
              <p :class="{fadeIn: restartActive, blur: blurActive}">{{ randX }}</p>
            </li>
          </ul><!-- 横の問題マス -->
          <div class="flex w-full h-[66.66666%]">
            <ul class="w-1/3 h-full bg-green-100">
              <li v-for="randY in randYs" class="text-[16vw] pt-2 border-4 border-t-0 border-gray-400 w-full h-1/2 flex justify-center items-center">
                <p :class="{fadeIn: restartActive, blur: blurActive}">{{ randY }}</p>
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
                {{ userName }}
              </h2>
              <p class="mt-2">レベル：{{ 'level' }}</p>
              <p>後{{ 'nextLV' }}ポイントでレベルアップ</p>
            </div>
          </div>
<!-- 時間 -->
          <div class="card flex flex-col items-center justify-center mt-3 border-2 w-full h-1/3 bg-base-100 shadow-xl">
            <div class="">
              <h2 class="card-title">じかん</h2>
              <div class="flex text-[1.8rem]">
                <div class="min-w-[1.6rem] w-10 text-right pr-1 ml-1">{{ minute }}</div>
                <div>ふん</div>
                <div class="min-w-[1.6rem] w-10 text-right pr-1 ml-1">{{ second }}</div>
                <div>びょう</div>
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
      <div class="modal-box bg-white w-1/2 max-w-5xl h-[35%] opacity-0.5">

        <p class="text-center text-5xl mb-10 mt-5">はじめてもいい？</p>
        <div class="flex gap-8 justify-center items-center">
          <button @click="gameStart()" 
            class="w-60 h-32 mb-10 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-400 hover:text-white hover:bg-blue-400 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-400 focus:ring-offset-2 transition-all text-5xl pb-1"
          >OK!
          </button>
          <NuxtLink to="/courseSelect" class="">
            <button @click="" 
              class="w-60 h-32 mb-10 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-yellow-100 border border-transparent font-semibold text-yellow-400 hover:text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 ring-offset-white focus:ring-yellow-400 focus:ring-offset-2 transition-all text-4xl pb-1"
            >
              やりなおす
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

<!-- 解き終えた後のモーダル -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" v-model="modal_3"/>
    <div class="modal">
      <div class="modal-box bg-white w-11/12 max-w-5xl h-2/3">
  <!-- クリアイラスト -->
        <div class="flex justify-center mb-5">
          <img src="../assets/congrats.png" alt="がんばりました" class="w-[40%]" :class="{fadeIn: active}">
        </div>
  <!-- 経験値バー -->
        <div class="w-[90%] flex gap-8 justify-center mb-3 mx-auto">
          <p class="w-[15%] leading-[38px] text-[1.5rem]">レベル.{{ userLv }}</p>
          <div class="relative w-full">
            <div class="relative w-full flex h-8 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
              <div class="flex flex-col justify-center overflow-hidden bg-green-300 text-[1.2rem] text-white text-center" :class="{exBar: active}" role="progressbar" :style="{ width: userEx + '%'}" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
              <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">{{ userEx }}%</div>
            </div>
            <span class="animate-wiggle absolute top-[-20px] right-[-15px] inline-flex items-center py-0.5 px-1.5 rounded-full text-xl font-medium transform -translate-y-1/2 translate-x-1/2 bg-blue-300 text-white"> + {{ getEx }}</span>
          </div>
        </div>
  <!-- 時間とランキングと回数 -->
        <div class="w-[90%] flex justify-center gap-[1rem] mb-5 mx-auto">
          <div class="w-full text-center shadow-lg border-4 border-gray-300 rounded-[2rem] py-[1rem] px-[1.5rem]">
            <p class="text-[1.5rem]">じかん</p>
            <p class="text-[1.5rem]">{{ minute }} ふん {{ second }} びょう</p>
          </div>
          <div class="w-full text-center shadow-lg border-4 border-gray-300 rounded-[2rem] py-[1rem] px-[1.5rem]">
            <p class="text-[1.5rem]">ランキング</p>
            <p class="text-[1.5rem]">{{ "userRank" }} い</p>
          </div>
          <div class="w-full text-center shadow-lg border-4 border-gray-300 rounded-[2rem] py-[1rem] px-[1.5rem]">
            <p class="text-[1.5rem]">クリアしたかいすう</p>
            <p class="text-[1.5rem]">{{ "userTryCount" }}</p>
          </div>
        </div>
  <!-- コース選択 -->
        <div class="w-[90%] h-16 flex mx-auto gap-[1rem]">
          <div class="w-1/3 h-full">
            <button @click="restart" class="w-full h-full mb-10 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-400 hover:text-white hover:bg-blue-400 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-400 focus:ring-offset-2 transition-all text-3xl pb-1">
              <h3>もういっかい</h3>
            </button>
          </div>
          <NuxtLink to="/courseSelect" class="w-1/3 h-full">
            <button @click="" class="w-full h-full mb-10 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-yellow-100 border border-transparent font-semibold text-yellow-400 hover:text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 ring-offset-white focus:ring-yellow-400 focus:ring-offset-2 transition-all text-3xl pb-1" >
              <h3>コースをえらぶ</h3>
            </button>
          </NuxtLink>
          <NuxtLink to="/" class="w-1/3 h-full">
            <button @click="" class="w-full h-full mb-10 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-gray-100 border border-transparent font-semibold text-gray-400 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 ring-offset-white focus:ring-yellow-400 focus:ring-offset-2 transition-all text-3xl pb-1" >
              <h3>やめる</h3>
            </button>
          </NuxtLink>
        </div>
      </div>
      <confetti v-if="modal_3 === true" class="z-[-1]"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import { Ref } from 'Vue'
import { useModal } from '../composables/useModal'
const { symbol, cells, modal_3, modal_4, formsColor, } = useModal()

const active = ref(false) // fadeIN用オンオフ
const restartActive = ref(false) // リトライ用オンオフ
const blurActive = ref(false) // 問題ぼかし用オンオフ

// プロフ
const userName = 'きしだふみお'
const userLv = ref(1)
const userEx = ref(0)


// Ex計算
const exCalc = () => {
  getEx.value = 100 - (second.value + minute.value * 60)
  let getExSave = getEx.value
  const exTimer = setInterval(() => {
    if (userEx.value < getExSave) {
      userEx.value++
    } else { 
      clearInterval(exTimer)
      getExSave = 0
    }
  }, 10)
}

// Lvup
const lvUp = () => {
  if ( userEx.value >= 100 ) {
    userEx.value = userEx.value - 100
    userLv.value++
  }
}

const getEx = ref(0)
const userTryCount = 0
const needEx = 0
const userNextLvEx = 0 

// 問題生成ロジック

onMounted(() => {
  randSet()
  ansSet()
  formSet()
  formsColor.value[0] = true
  modal_4.value = true
  restartActive.value = true
  blurActive.value = true
  //modal_3.value = true    //今だけええええええええええええええええええ
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

// 問題リトライ用ロジック

const restart = () => {
  randXs.value = []
  randYs.value = []
  forms.value = []
  ans.value = []
  collectImg.value = [false, false, false, false]
  f.value = 0
  second.value = 0
  minute.value = 0
  restartActive.value = true
  blurActive.value = true

  randSet()
  ansSet()
  formSet()

  formsColor.value[0] = true
  modal_4.value = true
  modal_3.value = false

  getEx.value = 0
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
let collectImg = ref([false, false, false, false])

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
          exCalc()
          active.value = true
          clearInterval(timerId)
          modal_3.value = true
          restartActive.value = false
        } // モーダルを出す----------------------------------------------後で追加
      } else {} // 答えが間違っていたら何もしない
    } else {} // ３文字目を入力すると、間違えてるとポップアップを出したい
  } 
}

//timer 分と秒の表示と追加
let second = ref(0)
let minute = ref(0)
let timerId: string | number | NodeJS.Timeout | undefined;

//timer 動作処理
  const gameStart = () => {
    modal_4.value = false;
    blurActive.value = false
    timerId = setInterval(() => {
      second.value++
      if (second.value % 60 === 0) {
        minute.value++
        second.value -= 60
      }
    }, 1000)
  }

</script>

<style>

.blur {
  filter: blur(20px) opacity(16%) saturate(300%);
}

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

.fadeIn {
  animation: fadeIn 0.6s;
}
@keyframes fadeIn {
  0% {
    scale: 0;
  }
  100% {
    scale: 1;
  }
}

.exBar {
  animation: exBar 2s;
}
@keyframes exBar {
  0% { 
    width: 0;
  }
}

</style>