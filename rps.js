function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.33) {
        return "r";
    } else if (randomValue < 0.66) {
        return "p";
    } else {
        return "s";
    }
}

function getHumanChoice() {
    let choice = prompt("Your turn: rock(r)/paper(p)/scissor(s)");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "r" && computerChoice === "s") ||
        (humanChoice === "p" && computerChoice === "r") ||
        (humanChoice === "s" && computerChoice === "p")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

for (let i = 0; i < 5; i++) {
    console.log(`--- Round ${i + 1} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

console.log("--- Final Result ---");
if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
} else if (computerScore > humanScore) {
    console.log("Game over! The computer won.");
        let isit = prompt("fav pokemon").toLowerCase();
        if (isit = "urshifu"){
            console.log("urshifu is gay");
        }
} else {
    console.log("The game ended in a draw!");
}




