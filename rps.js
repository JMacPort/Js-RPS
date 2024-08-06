const RPS_CHOICES = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    return RPS_CHOICES[Math.floor(Math.random() * 3)]
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper or scissors")
    return playerChoice
}

function playRound(computerChoice, playerChoice) {
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log(`You win! ${playerChoice} beats ${computerChoice}`)
            playerScore++
        } else if (computerChoice == "paper") {
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
            computerScore++
        } else {
            console.log("It's a draw!")
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            console.log(`You win! ${playerChoice} beats ${computerChoice}`)
            playerScore++
        } else if (computerChoice == "scissors") {
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
            computerScore++
        } else {
            console.log("It's a draw!")
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log(`You win! ${playerChoice} beats ${computerChoice}`)
            playerScore++
        } else if (computerChoice == "rock") {
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
            computerScore++
        } else {
            console.log("It's a draw!")
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getPlayerChoice())
    }
    if (playerScore > computerScore) {
        console.log("You WIN!")
    } else if (computerScore > playerScore) {
        console.log("You LOSE!")
    } else {
        console.log("It's a DRAW!")
    }
}

playGame()
