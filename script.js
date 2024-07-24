// Game Revisited

const choiceOne = document.getElementById('rock');
const choiceTwo = document.getElementById('paper');
const choiceThree = document.getElementById('scissors');

let humanScore = 0;
let computerScore = 0;

//---------------------------------------------------------------------------------
// Display Human and Computer score
const content = document.querySelector('.content');
const displayScore = document.createElement('div');
const displayHumanScore = document.createElement('p');
const displayComputerScore = document.createElement('p');

displayScore.append(displayHumanScore);
displayScore.append(displayComputerScore);
content.append(displayScore);

displayScore.style.width = '33%';
displayScore.style.display = 'flex';
displayScore.style.justifyContent = 'space-between';
displayScore.style.marginTop = '2rem';
displayScore.style.border = '2px solid white';
displayScore.style.padding = '2rem';

displayHumanScore.innerText = `Human Score: ${humanScore}`;
displayComputerScore.innerText = `Computer Score: ${computerScore}`;
//---------------------------------------------------------------------------------
// Display winner
const displayWinner = document.createElement('div')

content.append(displayWinner);

displayWinner.innerText = '';

displayWinner.style.marginTop = '1.3rem';
//---------------------------------------------------------------------------------

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

    displayHumanScore.innerText = `Human Score: ${humanScore}`;
    displayComputerScore.innerText = `Computer Score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        if(humanScore === 5) {
            displayWinner.innerText = 'Congratulations! You Win This Game.';
            humanScore = 0;
            computerScore = 0;
        } else {
            displayWinner.innerText = 'Computer Wins This Game! Try again.';
            computerScore = 0;
            humanScore = 0;
        }
    }
}

displayHumanScore.setAttribute('id', 'info-txt');
displayComputerScore.setAttribute('id', 'info-txt');

displayWinner.setAttribute('id', 'main-txt');

choiceOne.addEventListener('click', () => {
    getHumanChoice('rock');
});

choiceTwo.addEventListener('click', () => {
    getHumanChoice('paper');
});

choiceThree.addEventListener('click', () => {
    getHumanChoice('scissors');
});
