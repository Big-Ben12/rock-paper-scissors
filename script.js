// Get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Get human choice when buttons are clicked
function getHumanChoice() {
    const rockSelection = document.querySelector("#rockBtn");
    const paperSelection = document.querySelector("#paperBtn");
    const scissorsSelection = document.querySelector("#scissorsBtn");

    rockSelection.addEventListener("click", () => playRound(getComputerChoice(), "rock"));
    paperSelection.addEventListener("click", () => playRound(getComputerChoice(), "paper"));
    scissorsSelection.addEventListener("click", () => playRound(getComputerChoice(), "scissors"));
}

// Scores
let humanScore = 0;
let computerScore = 0;

// Create a div for displaying results
const gameResultDiv = document.createElement("div");
document.body.appendChild(gameResultDiv);

// Play round function
function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    let resultMessage = "";
    if (computerChoice === humanChoice) {
        resultMessage = "It's a tie";
    } else if (
        (computerChoice === "scissors" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "scissors")
    ) {
        resultMessage = "You win this round";
        humanScore++;
    } else {
        resultMessage = "Computer wins this round";
        computerScore++;
    }
    resultMessage += `<br>Human: ${humanScore}, Computer: ${computerScore}`;
    gameResultDiv.innerHTML = resultMessage;

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    let winnerMessage = humanScore === 5 ? "Congratulations! You won the game!" : "Computer wins the game!";
    gameResultDiv.innerHTML += `<br>${winnerMessage}`;
    resetGame();
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    setTimeout(() => {
        gameResultDiv.innerHTML = "Game reset. Start playing again!";
    }, 2000);
}

// Initialize game
getHumanChoice();
