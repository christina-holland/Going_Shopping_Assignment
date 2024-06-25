const rockButton = document.getElementById("rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieText = document.getElementById("result-tie");

let computerWinAmount = 0;
let playerWinAmount = 0;
let tieAmount = 0;

rockButton.addEventListener("click", function(){
    let hand1 = "rock";
    let hand2 = computerPlay();
    playRound(hand1, hand2);
});

paperButton.addEventListener("click", function() {
    let hand1 = "paper";
    let hand2 = computerPlay();
    playRound(hand1, hand2);
});

scissorsButton.addEventListener("click", function() {
    let hand1 = "scissors";
    let hand2 = computerPlay();
    playRound(hand1, hand2);
});

function computerPlay() {
    let choice = parseInt(Math.random()*10)%3;
    switch(choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function playerWin() {
    playerWinAmount++;
    playerScore.innerHTML = "Your wins: " + playerWinAmount;
}

function computerWin() {
    computerWinAmount++;
    computerScore.innerHTML = "Computer wins: " + computerWinAmount;
}

function tieWin() {
    tieAmount++;
    tieText.innerHTML = "Tie rounds: " + tieAmount;
}

function playRound(hand1, hand2) {
    if ( (hand1 === 'scissors' && hand2 === 'paper') ||
         (hand1 === 'rock' && hand2 === 'scissors') ||
         (hand1 === 'paper' && hand2 === 'rock') ) 
        {
        playerWin();
        } 
    
    else if ( (hand2 === 'scissors' && hand1 === 'paper') ||
              (hand2 === 'rock' && hand1 === 'scissors') ||
              (hand2 === 'paper' && hand1 === 'rock') )
        {
        computerWin();
        }

    else {
        tieWin(); 
        }
}

playRound();

