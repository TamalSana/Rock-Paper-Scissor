// Get reference to the results div from the HTML
const resultsDiv = document.querySelector("#results");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function updateDisplay(message, scoreMessage) {
    // Clear previous content
    resultsDiv.innerHTML = "";

    // Create elements for round result and score
    const resultPara = document.createElement("p");
    resultPara.textContent = message;

    const scorePara = document.createElement("p");
    scorePara.textContent = scoreMessage;
    scorePara.className = "score-display";

    // Append to the results div
    resultsDiv.appendChild(resultPara);
    resultsDiv.appendChild(scorePara);
}

function playRound(humanChoice, computerChoice) {
    let roundResult = "";

    // Evaluate logic
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

    // Update UI with round result and current score
    updateDisplay(roundResult, `Score: Human ${humanScore} - Computer ${computerScore}`);

    // Check for victory condition (first to 5)
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        updateDisplay(`${winner} won the game!`, `Final Score: Human ${humanScore} - Computer ${computerScore}`);

        // Reset scores
        humanScore = 0;
        computerScore = 0;
    }
}

// Select buttons
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// Add event listeners with clear comments
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
