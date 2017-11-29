process.stdin.resume();
process.stdin.setEncoding('utf8');
let inputData = '';

process.stdin.on('data', (chunk) => {
    inputData += chunk;
});

process.stdin.on('end', () => {
    var lines = inputData.split('\n');
    var line_1 = lines[0];
    my_card = line_1.split(" ");

    if(my_card[0] == "0"){
        console.log("1"); // 賭けチップ数

    }else{
        var card_total = 0;
        for(var i=0; i<my_card.length; i++){
            card_total += parseInt(my_card[i]);
        }
        if(card_total < 10){ //★カードを引く条件の合計値を変えてみよう！★
            console.log("HIT");// カード引く
        }else{
            console.log("STAND");// 勝負
        }
    }
});
