// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    let choice = prompt("Choose between: rock, paper or scissors: ");
    return choice.toLowerCase();
}

// Step 6: Write the logic to play the entire game
function playGame() {

    // Step 4: Declare the players score variables
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {

        if (computerChoice === "rock" && humanChoice === "rock") {
            alert(`${computerChoice} vs ${humanChoice}. It's a draw!`)
            // console.log("It's a draw!")
        } else if (computerChoice === "rock" && humanChoice === "paper") {
            alert(`${computerChoice} vs ${humanChoice}. You win! Paper beats Rock.`)
            // console.log("You win! Paper beats Rock.")
            humanScore++;
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            alert(`${computerChoice} vs ${humanChoice}. Computer wins! Rock beats Scissors.`)
            // console.log("Computer wins! Rock beats Scissors.")
            computerScore++;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            alert(`${computerChoice} vs ${humanChoice}. Computer wins! Paper beats Rock.`)
            // console.log("Computer wins! Paper beats Rock.")
            computerScore++;
        } else if (computerChoice === "paper" && humanChoice === "paper") {
            alert(`${computerChoice} vs ${humanChoice}. It's a draw!`)
            // console.log("It's a draw")
        } else if (computerChoice === "paper" && humanChoice === "scissors") {
            alert(`${computerChoice} vs ${humanChoice}. You win! Scissors beats Paper.`)
            // console.log("You win! Scissors beats Paper.")
            humanScore++;
        } else if (computerChoice === "scissors" && humanChoice === "rock") {
            alert(`${computerChoice} vs ${humanChoice}. You win! Rock beats Scissors.`)
            // console.log("You win! Rock beats Scissors.")
            humanScore++;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            alert(`${computerChoice} vs ${humanChoice}. Computer wins! Scissors beats Paper.`)
            // console.log("Computer wins! Scissors beats Paper.")
            computerScore++;
        } else if (computerChoice === "scissors" && humanChoice === "scissors") {
            alert(`${computerChoice} vs ${humanChoice}. It's a draw!`)
            // console.log("It's a draw!")
        } else {
            alert("Ups... Something went wrong!\nChoose between: rock, paper and scissors.");
        }
    }

    if (computerScore > humanScore) {
        alert(`Computer wins ${computerScore} vs ${humanScore}`)
    } else { alert(`You win ${humanScore} vs ${computerScore}`) }
}

// playGame();