const content = document.querySelector("#content")
let rockBtn = document.querySelector("#rock")
let paperBtn = document.querySelector("#paper")
let scissorsBtn = document.querySelector("#scissors")
let humanChoice
let computerChoice
let winner
let humanScore = 0
let computerScore = 0

let cChoice = function (){
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock"
        }
    else if (choice == 1) {
        return "paper"
    } else {
        return "scissors"
    }}


let playRound = function (humanChoice, computerChoice) {  
    let response
    if (humanChoice == computerChoice) {
                  response = ("It's a tie!")        
            } else if (humanChoice == "rock" && computerChoice == "paper") {
                response = ("You lose, paper beats rock")
                 ++computerScore
            } else if (humanChoice == "rock" && computerChoice == "scissors") {
                response = ("You win, rock beats scissors")
                 ++humanScore
             } else if (humanChoice == "paper" && computerChoice == "rock") {
                response = ("You win, paper beats rock")
                 ++humanScore
             } else if (humanChoice == "paper" && computerChoice == "scissors") {
                response = ("You lose, scissors beats rock")
                 ++computerScore
             } else if (humanChoice == "scissors" && computerChoice == "paper") {
                response = ("You win, scissors beats paper")
                 ++humanScore
             } else if(humanChoice == "scissors" && computerChoice == "rock") {
                response = ("You lose, rock beats scissors")
                 ++computerScore
    }

const display = document.createElement("div");
while (content.firstChild){
    content.removeChild(content.firstChild)
}
display.setAttribute ("style", "color: white; background: black; marginTop: 20px")
display.textContent = response
const disH = document.createElement("p")
disH.textContent = `Your Score = ${humanScore}`
const disC = document.createElement("p")
disC.textContent = `Computer Score = ${computerScore}`
display.appendChild(disH)
display.appendChild(disC)
content.appendChild(display)

    if(humanScore == 5 || computerScore == 5){
        const gameOver = document.createElement("p")
        gameOver.textContent = "GAME OVER"
        gameOver.setAttribute ("style", "color: orange; background: gray; font-size: 40px")
        content.appendChild(gameOver)
        humanScore = 0
        computerScore = 0
    }
}



rockBtn.addEventListener("click", function() {
    humanChoice = this.id
    computerChoice = cChoice ()
    console.log(computerChoice)
    playRound (humanChoice, computerChoice)
}
  );

  paperBtn.addEventListener("click", function() {
    humanChoice = this.id
    computerChoice = cChoice ()
    console.log(computerChoice)
    playRound (humanChoice, computerChoice)
  });

  scissorsBtn.addEventListener("click", function() {
    humanChoice = this.id
    computerChoice = cChoice ()
    console.log(computerChoice)
    playRound (humanChoice, computerChoice)
  });





