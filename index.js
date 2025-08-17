const buttons = document.querySelectorAll(".buttons button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const computerChoiceEl = document.getElementById("computer-choice");
const resetBtn = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;

// Event listeners for buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const result = playRound(button.id, computerSelection);

    // Show computer's choice
    computerChoiceEl.textContent = choiceToEmoji(computerSelection);

    // Show result text
    resultEl.textContent = result.message;
    resultEl.style.color = result.color;
  });
});

// Reset game
resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultEl.textContent = "Game reset! Make your move!";
  resultEl.style.color = "#333";
  computerChoiceEl.textContent = "❔";
});

// Computer choice
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// Convert word to emoji
function choiceToEmoji(choice) {
  if (choice === "rock") return "✊";
  if (choice === "paper") return "✋";
  if (choice === "scissors") return "✌️";
  return "❔";
}

// Play a round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return { message: "It's a tie!", color: "#555" };
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return {
      message: `✅ You win! ${playerSelection} beats ${computerSelection}`,
      color: "green",
    };
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return {
      message: `❌ You lose! ${computerSelection} beats ${playerSelection}`,
      color: "red",
    };
  }
}
