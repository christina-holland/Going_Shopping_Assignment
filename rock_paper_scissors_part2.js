//define the variable hands with the options of rock, paper, and scissors
const hands = ['rock', 'paper', 'scissors'];

//define function getHand to determine if a player will receive rock, paper, or scissors
function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}

//define players 1 and 2
let player1 = {
    name: 'Christina',
    getHand: getHand,
    wins: 0
};

let player2 = {
    name: 'Chloe',
    getHand: getHand,
    wins: 0
};

//define function playRound to determine the winner of rock, paper, scissors
function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();
    
    console.log(`${player1.name} shows ${hand1}`);
    console.log(`${player2.name} shows ${hand2}`);
    
    if ( (hand1 === 'scissors' && hand2 === 'paper') ||
         (hand1 === 'rock' && hand2 === 'scissors') ||
         (hand1 === 'paper' && hand2 === 'rock') ) 
        {
        player1.wins++;
        console.log(`${player1.name} wins!`,`Total wins: ${player1.wins}`);
        return player1;
        } 
    
    else if ( (hand2 === 'scissors' && hand1 === 'paper') ||
              (hand2 === 'rock' && hand1 === 'scissors') ||
              (hand2 === 'paper' && hand1 === 'rock') )
        {
        player2.wins++;
        console.log(`${player2.name} wins!`,` Total wins: ${player2.wins}`);
        return player2;
        }

    else {
        console.log("It's a tie.");
        return null; 
        }
}

//define the variable playUntil as 3
let playUntil = 3;

//define the function playGame to determine the winner as the player who is first to win three games
function playGame(player1, player2, playUntil) {
    while (player1.wins < playUntil && player2.wins < playUntil) {
        playRound(player1, player2);
    }
    return player1.wins === playUntil ? player1 : player2;
}

//define players 3 and 4
let player3 = {
    name: 'Austin',
    getHand: getHand,
    wins: 0
};

let player4 = {
    name: 'Brittany',
    getHand: getHand,
    wins: 0
};

//define the function playTournament to determine the winner in a four-player bracket tournament
//player 1 plays player 2
//player 3 plays player 4
//the winners of each round play each other to determine the final winner
function playTournament(player1, player2, player3, player4, playUntil) {
    winner1 = playGame(player1, player2, playUntil);
    winner2 = playGame(player3, player4, playUntil);
    console.log(`First round winners:`, `${winner1.name} and ${winner2.name}`);

    winner1.wins = 0;
    winner2.wins = 0;
    finalWinner = playGame(winner1, winner2, playUntil);
    console.log(`${finalWinner.name} is the world champion!`);
}

//call the function playTournament
playTournament(player1, player2, player3, player4, playUntil);


