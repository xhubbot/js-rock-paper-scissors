function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const input = prompt("Choose rock, paper, or scissors:").toLowerCase();
  
  const validChoices = ["rock", "paper", "scissors"];
  
  if (validChoices.includes(input)) {
    return input;
  } else {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice(); // ask again
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      humanScore++;
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
    }
    console.log(`Human score: ${humanScore}; Computer score: ${computerScore}`);
  }

  for (let i = 1; i <= 5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (computerScore > humanScore) {
    console.log("Computer wins!");
  } else if (humanScore > computerScore) {
    console.log("Human wins!");
  } else {
    console.log("Draw!");
  }
}

playGame();