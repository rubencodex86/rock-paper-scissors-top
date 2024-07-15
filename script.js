// Step 1: Setup the project structure
// console.log("Hello world!");

// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

// console.log(getComputerChoice());

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    let choice = prompt("Choose between: rock, paper or scissors: ");
    return choice.toLowerCase();
}

// console.log(getHumanChoice());

// Step 4: Declare the players score variables

let computerScore = 0;
let humanScore = 0;

// Step 5: Write the logic to play a single round

function playRound(computerChoice, humanChoice) {

    console.log(computerChoice);
    console.log(humanChoice);

    if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("It's a draw!")
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats Rock.")
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer wins! Rock beats Scissors.")
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer wins! Paper beats Rock.")
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        console.log("It's a draw")
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beats Paper.")
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats Scissors.")
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer wins! Scissors beats Paper.")
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        console.log("It's a draw!")
    } else {
        alert("Ups... Something went wrong!\nChoose between: rock, paper and scissors.");
    }
}

playRound(getComputerChoice(), getHumanChoice());

console.log(computerScore);
console.log(humanScore);