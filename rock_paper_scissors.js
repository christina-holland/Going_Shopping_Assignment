const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}

let player1 = {
    name: 'Christina',
    getHand: getHand
};

let player2 = {
    name: 'Chloe',
    getHand: getHand
};

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();
    
    console.log(`${player1.name} shows ${hand1}`);
    console.log(`${player2.name} shows ${hand2}`);
    
    if ( (hand1 === 'scissors' && hand2 === 'paper') ||
         (hand1 === 'rock' && hand2 === 'scissors') ||
         (hand1 === 'paper' && hand2 === 'rock') ) 
        {
        console.log(`${player1.name} wins`);
        return player1;
        } 
    
    else if ( (hand2 === 'scissors' && hand1 === 'paper') ||
              (hand2 === 'rock' && hand1 === 'scissors') ||
              (hand2 === 'paper' && hand1 === 'rock') )
        {
        console.log(`${player2.name} wins`);
        return player2;
        }

    else {
        console.log("It's a tie");
        return null; 
        }
}

playRound(player1, player2);
