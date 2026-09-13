const resultsDiv = document.querySelector("#results");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// Add event listeners
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function updateDisplay(message, scoreMessage) {
    resultsDiv.innerHTML = `
        <p>${message}</p>
        <p class="score-display">${scoreMessage}</p>
    `;
}

function playRound(humanChoice, computerChoice) {
    let roundResult = "";

    if (humanChoice === computerChoice) {
        roundResult = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    updateDisplay(roundResult, `Score: Human ${humanScore} - Computer ${computerScore}`);

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        updateDisplay(`${winner} won the game!`, `Final Score: Human ${humanScore} - Computer ${computerScore}`);

        humanScore = 0;
        computerScore = 0;
    }
}

