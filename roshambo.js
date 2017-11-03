var computerScore = 0
var humanScore = 0



function computerChoiceGenerator() {
    var rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

document.getElementById("rock").addEventListener("click", (() => {
    sortChoices(computerChoiceGenerator(), "rock")
}))
document.getElementById("paper").addEventListener("click", (() => {
    sortChoices(computerChoiceGenerator(), "paper")
}))
document.getElementById("scissors").addEventListener("click", (() => {
    sortChoices(computerChoiceGenerator(), "scissors")
}))

function sortChoices(computerChoice, humanChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            applyTies()
        } else if (computerChoice === "paper") {
            computerScore++
            applyLosses()
        } else if (computerChoice === "scissors") {
            humanScore++
            applyWins()
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++
            applyWins()
        } else if (computerChoice === "paper") {
            applyTies()
        } else if (computerChoice === "scissors") {
            computerScore++
            applyLosses()
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++
            applyLosses()
        } else if (computerChoice === "paper") {
            humanScore++
            applyWins()
        } else if (computerChoice === "scissors") {
            applyTies()
        }
    }
}

function applyWins() {
    document.getElementById('wins').innerHTML = humanScore
    document.getElementById('info').innerHTML = "WIN!!!"
}

function applyLosses() {
    document.getElementById('losses').innerHTML = computerScore
    document.getElementById('info').innerHTML = "YOU LOST!!!"
}

function applyTies() {
    document.getElementById('info').innerHTML = "TIE!!!"
}
