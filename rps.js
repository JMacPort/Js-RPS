const RPS_CHOICES = ['Rock', 'Paper', 'Scissors']
let playerScore = 0
let computerScore = 0

const mainContent = document.querySelector('.mainContent > h1')

const newDiv = document.createElement('div')
newDiv.setAttribute('class', 'score')
const playerScoreSpan = document.createElement('p')
const computerScoreSpan = document.createElement('p')
const winner = document.createElement('p')

playerScoreSpan.textContent = `Player Score: ${playerScore}`
computerScoreSpan.textContent = `Computer Score: ${computerScore}`

newDiv.appendChild(playerScoreSpan)
newDiv.appendChild(computerScoreSpan)
newDiv.appendChild(winner)
mainContent.insertAdjacentElement('afterend', newDiv)

function getComputerChoice() {
    return RPS_CHOICES[Math.floor(Math.random() * 3)]
}

function getPlayerChoice(choice) {
    return choice
}



function playRound(computerChoice, playerChoice) {
    if (playerChoice == "Rock") {
        if (computerChoice == "Scissors") {
            playerWin(playerChoice, computerChoice)
        } else if (computerChoice == "Paper") {
            computerWin(playerChoice, computerChoice)
        } else {
            winner.textContent = "It's a draw"
        }
    } else if (playerChoice == "Paper") {
        if (computerChoice == "Rock") {
            playerWin(playerChoice, computerChoice)
        } else if (computerChoice == "Scissors") {
            computerWin(playerChoice, computerChoice)
        } else {
            winner.textContent = "It's a draw"
        }
    } else if (playerChoice == "Scissors") {
        if (computerChoice == "Paper") {
            playerWin(playerChoice, computerChoice)
        } else if (computerChoice == "Rock") {
            computerWin(playerChoice, computerChoice)
        } else {
            winner.textContent = "It's a draw"
        }
    }

    if (playerScore === 5) {
        winner.textContent = `YOU WIN! Resetting!`
        resetScores()
    } else if (computerScore === 5) {
        winner.textContent = `YOU LOSE! Resetting!`
        resetScores()
    }
}

const GAME_BUTTONS = document.querySelectorAll(".rps")
GAME_BUTTONS.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(getComputerChoice(), getPlayerChoice(button.getAttribute('data-text')))
    });
});



function resetScores() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = `Player Score: ${playerScore}`
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`
}

function playerWin(playerChoice, computerChoice) {
    playerScore++
    playerScoreSpan.textContent = `Player Score: ${playerScore}`
    winner.textContent = `${playerChoice} beats ${computerChoice}`
}

function computerWin(playerChoice, computerChoice) {
    computerScore++
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`
    winner.textContent = `${computerChoice} beats ${playerChoice}`
}
