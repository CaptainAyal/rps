

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
    let hNum
    // declare variable
    let hChoice = prompt("Please choose 'rock', 'paper', or 'scissors'.")
    // get user choice
    // hChoice.toLowerCase()=newChoice **not working
    //solve for upper/lower case issues
    console.log(hChoice)
    if (hChoice == "rock") {
        hNum = 1
    }
    else if (hChoice == "paper") {
        hNum = 2
    } 
    else if (hChoice == "scissors"){
        hNum = 3
    }
    else{
        alert("Invalid Choice")
    }    
    console.log(hNum)
    }
