export const useModal = () => {
//コースセレクト用のモーダル
  const symbol = useState('symbol', () => '') // 計算記号
  const cells = useState('cells', () => 0) // マス目
  const formsColor = useState('formsColor', () => [false,false,false,false]) // マスの色 

  const modal_1 = ref(false) // モーダル「何算？」
  const modal_2 = ref(false) // モーダル「何マス？」
  formsColor.value = [true,false,false,false] // マス目の色初期化

  // 何算か
  const modalSwitch_plus = () => {
    modal_1.value = false
    modal_2.value = true
    symbol.value = '+'
    sessionStorage.setItem('test', JSON.stringify(symbol.value))
  }
  const modalSwitch_multi = () => {
    modal_1.value = false
    modal_2.value = true
    symbol.value = 'x'
  }
  // 何マスか
  const modalSwitch_4cell = () => {
    modal_2.value = false
    cells.value = 4
  }
  const modalSwitch_9cell = () => {
    modal_2.value = false
    cells.value = 9
  }
// 問題が終わった後のモーダル
  const modal_3 = ref(false) 

// 問題を解く前のモーダル
  const modal_4 = ref(false)

// 仮でランキングドロワー用のデータを置く

const rankView = ref(false) // ランキングのドロワー用オンオフ
const zInActiveOn = ref(false)
const zInActiveOff = ref(true)
const showRanking = () => {
  rankView.value = !rankView.value
  if (rankView.value === true) {
    zInActiveOn.value = !zInActiveOn.value
    zInActiveOff.value = !zInActiveOff.value
  } else {
    rankView.value = !rankView.value
    setTimeout(() => {
      zInActiveOn.value = !zInActiveOn.value
      zInActiveOff.value = !zInActiveOff.value
    }, 250)
  }

}
  
  return { symbol, cells, modal_1, modal_2, modal_3, modal_4, formsColor, modalSwitch_plus, modalSwitch_multi, modalSwitch_4cell, modalSwitch_9cell, rankView, zInActiveOn, zInActiveOff, showRanking }
}