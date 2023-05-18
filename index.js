let options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random()*3)]
    // console.log (computerChoice)
    return computerChoice
}

//getComputerChoice()

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        console.log("It's a Tie!")
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "scissors" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
        return "PlayerWins"
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
        return "ComputerWins"
    }
    }

// let playerSelection = "paper"
// let computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection))

function validateInput(input) {
    return options.includes(input.toLowerCase())
}


function getPlayerChoice() {
    let input = prompt("ROCK, PAPER, SCISSORS")
    let isInputValid = validateInput(input)
   
    while (!isInputValid) {
        console.log("invalid choice")
        input = prompt("ROCK, PAPER, SCISSORS")
        isInputValid = validateInput(input)
    }
    if (isInputValid) {
        return input.toLowerCase()
    } 
}


function game(){
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection)
        if (winner == "PlayerWins") {
            playerScore++
        } else if (winner == "ComputerWins") {
            computerScore++
        }
        console.log(`Computer: ${computerScore} - Player: ${playerScore}`)
    }
    
    if (playerScore == computerScore) {
        console.log("Game over. It's a tie!")
    } else if (playerScore > computerScore) {
        console.log("Game over. You win!")
    } else if (computerScore > playerScore) {
        console.log("Game over. You lose!")
    }
  
}

game()