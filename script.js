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

  function determineTheWinner() {
    if (computerScore === 5) {
      winnerPara.innerText = "Computer wins!";
    } else if (humanScore === 5) {
      winnerPara.innerText = "Human wins!"
    }
  }

  const rock = document.createElement("button");
  const paper = document.createElement("button");
  const scissors = document.createElement("button");
  rock.textContent = "rock";
  paper.textContent = "paper";
  scissors.textContent = "scissors";
  document.body.appendChild(rock);
  document.body.appendChild(paper);
  document.body.appendChild(scissors);

  let humanScore = 0;
  let computerScore = 0;

  rock.addEventListener("click", function() {
    let humanSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    updateScore();
    winnerPara.innerText = "";
    if (humanScore === 5 || computerScore === 5) {
      determineTheWinner();
      humanScore = 0;
      computerScore = 0;
    }
  });

  paper.addEventListener("click", function() {
    let humanSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    updateScore();
    winnerPara.innerText = "";
    if (humanScore === 5 || computerScore === 5) {
      determineTheWinner();
      humanScore = 0;
      computerScore = 0;
    }
  });

  scissors.addEventListener("click", function() {
    let humanSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    updateScore();
    winnerPara.innerText = "";
    if (humanScore === 5 || computerScore === 5) {
      determineTheWinner();
      humanScore = 0;
      computerScore = 0;
    }
  });

  function updateScore() {
    scorePara.innerText = `Human score: ${humanScore}; Computer score: ${computerScore}`;
  }

  const scoreDiv = document.createElement("div");
  const scorePara = document.createElement("p");
  document.body.appendChild(scoreDiv);
  scoreDiv.appendChild(scorePara);

  const winnerDiv = document.createElement("div");
  const winnerPara = document.createElement("p");
  document.body.appendChild(winnerDiv);
  winnerDiv.appendChild(winnerPara);
