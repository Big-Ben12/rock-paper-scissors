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


// Get human choice
function getHumanChoice() {
    let choice = prompt("Please enter your choice: ");
    console.log(choice);
    return choice;
}


// Scores
let humanScore = 0;
let computerScore = 0;

// Play round
function playRound (humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

