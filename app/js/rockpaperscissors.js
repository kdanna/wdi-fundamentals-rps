////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // This function operates on variable "move" to define what the player choice is. Player will get prompted chose rock, paper, or scissors. 4/26/16
function getPlayerMove(move) {
    return move || getInput();
}


    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // I created a function that will operate on variable "move" which will be null, therefore function randomPlay will take effect. 4/26/16
function getComputerMove(move) {
    return move || randomPlay();
}


    // I created the function getWinner with compares the the parameters of playerMove and computerMove to assign winnner variable. 4/26/16
function getWinner(playerMove,computerMove)  {
    var winner;
    if (playerMove === computerMove){
        winner = "tie";
    } 
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    }
    else {
        winner = "computer";
    }
    return winner;
}
  

//This was a tough one for me. Up until this point I hadn't seen so many functions and variables within a single function. 4/28/16
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove); 
        if (winner === 'player') {
        console.log("Player wins with " + playerMove + " while Computer loses with " + computerMove);
        playerWins ++;
        }else if (winner === 'computer') {
        console.log("Computer wins with " + computerMove + " while Player loses with " + playerMove);
        computerWins ++;
        }else if (winner === 'tie'){
        console.log("It's a tie! You both chose " + playerMove + "!");
        playerWins += 0;
        computerWins += 0;
}
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
}
return [playerWins, computerWins];
}
playToFive();

    
    




