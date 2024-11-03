console.log("Hello world!");

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

const getHumanChoice = () => {
  let choice = prompt("Input rock, paper or scissors:");
  choice = choice.toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    return choice;
  } else {
    console.log("Please check your input!");
    getHumanChoice();
  }
};

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

const playRound = (computerSelection, humanSelection) => {
  if (computerSelection == humanSelection) {
    console.log("It is a draw!");
  }
  if (computerSelection == "rock" && humanSelection == "paper") {
    console.log("You win!");
    humanScore++;
  } else if (computerSelection == "rock" && humanSelection == "scissors") {
    console.log("You lose!");
    computerScore++;
  } else if (computerSelection == "paper" && humanSelection == "rock") {
    console.log("You lose!");
    computerScore++;
  } else if (computerSelection == "paper" && humanSelection == "scissors") {
    console.log("You win!");
    humanScore++;
  } else if (computerSelection == "scissors" && humanSelection == "rock") {
    console.log("You win!");
    humanScore++;
  } else if (computerSelection == "scissors" && humanSelection == "paper") {
    console.log("You lose!");
    computerScore++;
  }
};

playRound(computerSelection, humanSelection);

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
  }
  console.log(humanScore, computerScore);
};

playGame();
