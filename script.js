// Get Computer choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    let cChoice;
    switch(randomNum) {
        case 0:
            cChoice = "rock";
            break;
        case 1:
            cChoice = "paper";
            break;
        case 2:
            cChoice = "scissors";
            break;
    }
    console.log(cChoice);
    return cChoice;
}


// Get human choice
function getHumanChoice() {
    let hChoice = prompt("Please enter your choice: ");
    console.log(hChoice);
    return hChoice;
}


// Scores
let humanScore = 0;
let computerScore = 0;


//Play game 
function playGame(){
// Play round
    function playRound (computerChoice, humanChoice){
        humanChoice = humanChoice.toLowerCase();
        if (computerChoice === humanChoice) {
            console.log("Its a tie")
        }
        else if (
            (computerChoice === "scissors" && humanChoice === "rock") ||
            (computerChoice === "rock" && humanChoice === "paper") ||
            (computerChoice === "paper" && humanChoice === "scissors")
        ){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            console.log("Human score is: ", humanScore);

        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            console.log("Computer score is: ", computerScore++);
        }
    }
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection); 
}

for (let i = 0; i < 5; i++){
    playGame();
}

