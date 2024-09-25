console.log("Hello world!");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const getComputerChoice = () => {
    res = getRandomInt(3);
    // 0 for r, 1 for p, 2 for s
    return res
}

const getHumanChoice = () => {
    let choice = prompt("Input r for rock, p for paper and s for scissors:");
    choice = choice.toLowerCase();
    if (choice == "r" || choice =="s" || choice == "p"){
        return choice
    }
    else {
        console.log("Please check your input!");
        getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

playRound = (getComputerChoice,getHumanChoice) => {
    if (getComputerChoice == 0 && getHumanChoice =="r"){
        console.log("It is a draw!")
    }
}

getHumanChoice()
