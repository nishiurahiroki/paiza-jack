const BET_CHIP = '1';

process.stdin.resume();
process.stdin.setEncoding('utf8');
let inputData = '';
process.stdin.on('data', (chunk) => {
  inputData += chunk;
});

process.stdin.on('end', () => {
  const myCards = inputData
                    .split('\n')[0]
                    .split(' ')

  const isChipBetTurn = '0' === myCards[0]
  if(isChipBetTurn){
    console.log(BET_CHIP); // 賭けチップ数
    return;
  }

  const total = myCards.reduce((previous, current) => (+previous) + (+current))
  if(total < 10){ //★カードを引く条件の合計値を変えてみよう！★
    console.log("HIT");// カード引く
  }else{
    console.log("STAND");// 勝負
  }
});
