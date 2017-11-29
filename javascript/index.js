const GAME = {
  hit : () => console.log('HIT'),
  stand : () => console.log('STAND'),
  betChip : chip => console.log('' + chip)
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
    GAME.betChip(1);
    return;
  }

  const total = myCards.reduce((previous, current) => (+previous) + (+current));
  if(17 <= total) {
    GAME.stand();
  } else {
    GAME.hit();
  }
});
