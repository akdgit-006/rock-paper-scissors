function game() {
  do {
    playerChoice=playerTurn();
    computerChoice=getComputerChoice();
    let roundWinner = playRound(playerChoice, computerChoice);
    setScore(roundWinner);
    console.log(`Current Score - Player: ${playerScore}, 
        Computer: ${computerScore}`);
    }while(playerScore < 5 && computerScore < 5);
    playGame(playerScore, computerScore);
    resetGame();
}
function validateSelection(selection) {
    if (selection === "rock" || 
        selection === "paper" ||
        selection === "scissor") {
        return true;
    } else {
        return false;
    }
}



function getComputerChoice(){
    let randomComputerChoice=['rock','paper','scissor'];
    let getRandomChoice=
    Math.floor(Math.random()*randomComputerChoice.length);
    return randomComputerChoice[getRandomChoice];



}



function playerTurn(){
 let choice = getPlayerChoice();
 while (!validateSelection(choice)) {
      console.log("Incorrect selection, please re-enter your choice...");
      choice=getPlayerChoice();
    }
    return choice;
}



function getPlayerChoice(){
    return playerChoice=prompt("Please enter: rock, paper or scissor").
    toLowerCase();
}




function playRound(playerChoice,computerChoice){
    console.log(`You selected: "${playerChoice}"`);
    console.log(`Computer selected: "${computerChoice}"`);



    if (playerChoice === computerChoice) {
    console.log(`It's a draw. ${playerChoice} = ${computerChoice}!`);
    return;
    }
    else if(
        (playerChoice=== "rock" && computerChoice==="scissor")||
        (playerChoice=== "scissor" && computerChoice=== "paper")||
        (playerChoice=== "paper" && computerChoice=== "rock")
    ){
        console.log(
         `You won this round. ${playerChoice} beats ${computerChoice}!`
        );
        return "Player";
    }
    else{
        console.log(
        `You lost this round. ${playerChoice} doesn't beat ${computerChoice}.`
        );
        return "Computer";
    }
}



function playGame(playerScore,computerScore){
    if(playerScore==5){
        console.log("Game Over! You won the game!");
    }
    else{
        console.log("Game Over! You lost the game!");
    }



} 



function setScore(roundWinner){
    if(roundWinner==="Player"){
        playerScore++;
    } else if(roundWinner==="Computer"){
        computerScore++;
    }
}



function resetGame(){
  playerScore = 0;
  computerScore = 0;
  validSelection = false;
  playerChoice = null;
  computerChoice = null;
  let askPlayer=prompt("Do you want to play again? (yes/no)").toLowerCase();
  if(askPlayer === "yes") {
    game();
  }else{
    console.log("Thanks for playing!");
  }



}
game(); 