function playGame() {
    


function getComputerChoice(){
// Create function getComputerChoice
let choice = Math.floor(Math.random() * 3)
// sets choice variable to 0, 1, or 2
console.log (choice)
if (choice == 0) {
    return "rock"
    }
else if (choice == 1) {
    return "paper"
} else {
    return "scissors"
}
}

// getComputerChoice randomly returns strings rock paper or scissors

function getHumanChoice(){
    let hChoice = prompt("Please choose 'rock', 'paper', or 'scissors'.").toLowerCase();
    // get user choice, case insensitive

    if (hChoice == "rock") {
        return "rock"
    }
    else if (hChoice == "paper") {
        return "paper"
    } 
    else if (hChoice == "scissors"){
        return "scissors"
    }
    else{
        alert("Invalid Choice")
    }    
    
    }

    let humanScore = 0
    let computerScore = 0
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()

    function playRound(humanChoice, computerChoice) {
       if (humanChoice == computerChoice) {
             console.log("It's a tie!")        
       } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose, paper beats rock")
            ++computerScore
       } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win, rock beats scissors")
            ++humanScore
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win, paper beats rock")
            ++humanScore
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose, scissors beats rock")
            ++computerScore
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win, scissors beats paper")
            ++humanScore
        } else if(humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose, rock beats scissors")
            ++computerScore
        }
        console.log("Your score =" +" "+ humanScore +", My score =" + " "+ computerScore)
    }

    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);
}

playGame()

