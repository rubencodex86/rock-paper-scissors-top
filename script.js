// Game Revisited

const choiceOne = document.getElementById('rock');
const choiceTwo = document.getElementById('paper');
const choiceThree = document.getElementById('scissors');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function getHumanChoice(humanChoice) {

    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        alert(`It's a draw.`);
    } else if ( computerChoice === 'rock' && humanChoice === 'paper') {
        alert(`You Win! Paper beats Rock.`)
        humanScore++;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        alert(`Computer Wins! Rock beats Scissors.`);
        computerScore++;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        alert(`Computer Wins! Paper beats Rock.`);
        computerScore++;
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        alert(`You Win! Scissors beats Paper.`)
        humanScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        alert(`You Win! Rock beats Scissors.`)
        humanScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        alert(`Computer Wins! Scissors beats Paper.`);
        computerScore++;
    }

    if (humanScore === 5 || computerScore === 5) {
        if(humanScore === 5) {
            alert('Congratulations You Win this Game');
            humanScore = 0;
            computerScore = 0;
        } else {
            alert('Computer Wins! Try again');
            computerScore = 0;
            humanScore = 0;
        }
    }
}

choiceOne.addEventListener('click', () => {
    getHumanChoice('rock');
});

choiceTwo.addEventListener('click', () => {
    getHumanChoice('paper');
});

choiceThree.addEventListener('click', () => {
    getHumanChoice('scissors');
});
