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
  
  return { symbol, cells, modal_1, modal_2, modal_3, formsColor, modalSwitch_plus, modalSwitch_multi, modalSwitch_4cell, modalSwitch_9cell }
}