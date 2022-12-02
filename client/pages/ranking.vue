<template>
    <div>
      <h3>何かタイトル</h3>
      <table>
        <thead>
        <tr>
        <th>No.</th>
        <th>いいね数</th>
        <th>画像</th>
        <th>名前</th>
        <th>情報</th>
        <th>種類</th>
        </tr>
        </thead>
          <tbody>
            <tr v-for="item in sortedItems" :key="item.no">
              <td>{{ item.no }}</td>
              <td>{{ item.like }}</td>
              <td><img :src='item.img' width="80px"></td>
              <td>{{ item.name }}</td>
              <td>{{ item.info }}</td>
              <td><img :src='item.kind' width="40px"></td>
              <button :disabled="isPush" @click="item.like ++; isPush = true;">投票</button>
            </tr>
          </tbody>
      </table>
    </div>
</template>
  
  <script setup>

    // const items = [
    //     { 
    //         no:1,
    //         like: 7 , //ここの数字のランキング機能を作りたい
    //         img: '',  
    //         name:'foo',    
    //         info:'aaa',
    //         kind: '',
    //     },//以上の様な物が下に続く
    // ]

    // const isPush = false //二回以上押せない様にしている

    // const sortedItems = computed(() => {
    //     return this.items.slice().sort((a, b) => {
    //         if(a.like > b.like) return -1
    //         if(a.like < b.like) return 1
    //         return 0
    //     })
    // }
    // )
</script>