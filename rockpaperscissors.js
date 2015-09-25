
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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

function getPlayerMove(move) {
    return move || getInput;
}

function getComputerMove(move) {
    return move || randomPlay;
}

function getWinner(playerMove,computerMove) {
    var winner;
if ((playerMove=="rock"&&computerMove=="scissors")||(playerMove=="paper"&&computerMove=="rock")||(playerMove=="scissors"&&computerMove=="paper")) {winner = player;}
else if (playerMove==computerMove) {winner = tie;}
else {winner = computer;}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

while (playerWins<5&&computerWins<5) {  
if (winner==player) {playerWins +=1;
    console.log('Player chose '+playerMove+' while Computer chose '+computerMove)+'. Player wins round.';
    console.log('The score is currently '+playerWins+' to '+computerWins);
}
else if (winner==computer) {computerWins +=1;
    console.log('Player chose '+playerMove+' while Computer chose '+computerMove)+'. Computer wins round.';
    console.log('The score is currently '+playerWins+' to '+computerWins);
}
else if (winner==tie) {
    console.log('Player chose '+playerMove+' while Computer chose '+computerMove)+'. This round is a tie.';
    console.log('The score is currently '+playerWins+' to '+computerWins);
}
}
    return [playerWins, computerWins];
}