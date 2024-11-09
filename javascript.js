function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getComputerChoice = () => {
  let num = getRandomInt(3);
  // 0 for r, 1 for p, 2 for s
  if (num == 0) {
    return "rock";
  } else if (num == 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let humanScore = 0;
let computerScore = 0;

const playRound = (computerSelection, humanSelection) => {
  if (computerSelection == humanSelection) {
    div.textContent = "It is a draw!";
  }
  if (computerSelection == "rock" && humanSelection == "paper") {
    div.textContent = "You win!";
    humanScore++;
  } else if (computerSelection == "rock" && humanSelection == "scissors") {
    div.textContent = "You lose!";
    computerScore++;
  } else if (computerSelection == "paper" && humanSelection == "rock") {
    div.textContent = "You lose!";
    computerScore++;
  } else if (computerSelection == "paper" && humanSelection == "scissors") {
    div.textContent = "You win!";
    humanScore++;
  } else if (computerSelection == "scissors" && humanSelection == "rock") {
    div.textContent = "You win!";
    humanScore++;
  } else if (computerSelection == "scissors" && humanSelection == "paper") {
    div.textContent = "You lose!";
    computerScore++;
  }
};

const btns = document.querySelectorAll("button");
const div = document.querySelector("div");
const board = document.createElement("div");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (humanScore < 5 && computerScore < 5) {
      let choice = btn.getAttribute("id");
      let computerChoice = getComputerChoice();
      playRound(computerChoice, choice);
    }
    if (computerScore >= 5) {
      board.textContent = "Computer Win!(Refresh the Page to the next Play)";
      div.appendChild(board);
    } else if (humanScore >= 5) {
      board.textContent = "You win!(Refresh the Page to the next Play)";
      div.appendChild(board);
    }
  });
});
