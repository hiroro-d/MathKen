<template>
  <div id="app">
      <span id="target">0</span>
      <span>円</span>
      <button id="btn">10,000円追加</button>
  </div>
</template>

<script setup>

//テキストからカンマを除去して整数を返す
const format = (number)=>{
    return Number(number.replace(/,/g, ''))
}

//カウントアップ
const countUp = (target, add, increment)=>{
    //タイマーセット
    let timerId = setInterval(()=>{
        if(format(target.textContent) < add){
            //incrementの値を加算して代入
            target.textContent = format(target.textContent) + increment;
            //結果をカンマ区切りにして代入
            target.textContent = Number(target.textContent).toLocaleString()       
        } else {
            //タイマークリア
            clearInterval(timerId)
        }
    }, 10)
}

//演算に使用する要素を取得
const target = document.querySelector('#target')
//ボタン要素を取得
const btn = document.querySelector('#btn')
//加算する値
const add = 10000
//加算の増加量
const increment = 100

//イベントリスナー
btn.addEventListener('click', ()=>{
    //テキストコンテンツを取得
    let total = format(target.textContent)
    //テキストコンテンツにaddを加算
    total = Number(total) + add
    //カウントアップの処理を実行する
    countUp(target, total, increment)
})

</script>

<style scoped>

#app {
    width: 96%;
    max-width: 500px;
    margin: 40px auto;
    padding: 28px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 0px rgba(200, 200, 200, 1);
    text-align: right;
}

#target {
    color: #ea4335;
    font-size: 2rem;
}

#btn {
    display: block;
    width: 150px;
    padding:10px;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    font-size: .8rem;
    color: #ffffff;
    border: 0;
    background-color: #00c2bc;
    cursor: pointer;
}

</style>