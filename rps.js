

function getComputerChoice(){
// Create function getComputerChoice
let choice = Math.floor(Math.random() * 3)
// sets choice variable to 0, 1, or 2
console.log (choice)
if (choice == 0) {
    return "rock"
    }
if (choice == 1) {
    return "paper"
} else {
    return "scissors"
}
}

// getComputerChoice randomly returns strings rock paper or scissors
