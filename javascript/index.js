const GAME = {
  betChip : '1',
  hit : () => console.log('HIT'),
  stand : () => console.log('STAND')
};

process.stdin.resume();
process.stdin.setEncoding('utf8');
let inputString = '';
process.stdin.on('data', (chunk) => {
  inputString += chunk;
});

process.stdin.on('end', () => {
  const myCards = inputString
                    .split('\n')[0]
                    .split(' ')

  const isChipBetTurn = '0' === myCards[0]
  if(isChipBetTurn){
    console.log(GAME.betChip); // 賭けチップ数
    return;
  }

  const total = myCards.reduce((previous, current) => (+previous) + (+current));
  if(total < 10){
    GAME.hit();
  }else{
    GAME.stand();
  }
});
