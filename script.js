let computerScore=0;
let playerScore=0;
let computerChoice='None';
let playerChoice='None';
const choiceButtons =
document.querySelectorAll(".choice");

const playerScoreDisplay =
document.querySelector("#playerScore");

const computerScoreDisplay =
document.querySelector("#computerScore");

const playerChoiceDisplay =
document.querySelector("#player-choice");

const computerChoiceDisplay =
document.querySelector("#computer-choice");

const roundResultDisplay =
document.querySelector("#round-result");

const resetButton =
document.querySelector("#reset-btn");

resetButton.addEventListener("click", resetGame);

    choiceButtons.forEach(button => {

    button.addEventListener("click", () => {

        playerChoice = button.dataset.choice;

        computerChoice = getComputerChoice();

        const roundWinner =
        playRound(playerChoice, computerChoice);

        setScore(roundWinner);

        updateDisplay();

        checkWinner();

    });
});
    updateDisplay();

function getComputerChoice(){
    let randomComputerChoice=['rock','paper','scissors'];
    let getRandomChoice=
    Math.floor(Math.random()*randomComputerChoice.length);
    return randomComputerChoice[getRandomChoice];
}



function playRound(playerChoice,computerChoice){
    
    if(playerChoice === computerChoice){

    roundResultDisplay.textContent =
    "It's a Draw!";

    return;
}

    else if(
        (playerChoice=== "rock" && computerChoice==="scissors")||
        (playerChoice=== "scissors" && computerChoice=== "paper")||
        (playerChoice=== "paper" && computerChoice=== "rock")
    ){
        roundResultDisplay.textContent =
        `You won! ${playerChoice} beats ${computerChoice}`;
        return "Player";
    }
    else{
        roundResultDisplay.textContent =
        `Computer won! ${computerChoice} beats ${playerChoice}`;
        return "Computer";
    }
}


function checkWinner(){
    if(playerScore >=5){

        roundResultDisplay.textContent =
        "🎉 You Won The Game!";

        disableButtons();
    }

    if(computerScore >= 5){

        roundResultDisplay.textContent =
        "💻 Computer Won The Game!";

        disableButtons();
    }

}
function disableButtons(){
    choiceButtons.forEach(button => {

        button.disabled = true;

    });

}
function setScore(roundWinner){
    if(roundWinner==="Player"){
        playerScore++;
    } else if(roundWinner==="Computer"){
        computerScore++;
    }
}

function updateDisplay(){

    playerScoreDisplay.textContent =
    playerScore;

    computerScoreDisplay.textContent =
    computerScore;

    playerChoiceDisplay.textContent =
    `Your Choice: ${playerChoice}`;

    computerChoiceDisplay.textContent =
    `Computer Choice: ${computerChoice}`;
}

function resetGame(){

    playerScore = 0;
    computerScore = 0;

    playerChoice = "";
    computerChoice = "";

    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;

    playerChoiceDisplay.textContent =
    "Your Choice:";

    computerChoiceDisplay.textContent =
    "Computer Choice:";

    roundResultDisplay.textContent =
    "First to 5 wins!";

    choiceButtons.forEach(button => {
        button.disabled = false;
    });

}