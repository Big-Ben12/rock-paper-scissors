// Scores
let humanScore = 0;
let computerScore = 0;

// Get Computer choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
    let choice;
    switch(randomNum) {
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
    console.log(choice);
    return choice;
}
getComputerChoice();

// Get human choice
function getHumanChoice() {
    let choice = prompt("Please enter your choice: ");
    console.log(choice);
    return choice;
    
}
getHumanChoice();

// Play round
function playRound (humanChoice, computerChoice){

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)