

let num = Math.floor(Math.random()* 3) + 1

function getComputerChoice(){

   if (num === 1){
    return "ROCK"
   } else if (num === 2) {
    return "PAPER"
   } else {
    return "SCISSORS"
   }
 
}

function playRound(playerSelection, computerSelection) {

    if ((playerSelection === "ROCK" && computerSelection === "ROCK") || 
    ((playerSelection === "PAPER" && computerSelection === "PAPER")) || 
    ((playerSelection === "SCISSORS" && computerSelection === "SCISSORS"))) {

        return "Tie"
        
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        return "You Lose!"
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        return "You Win!"
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        return "You Lose!"
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        return "You Win!"
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        return "You Win!"
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        return "You Lose!"
    }      

}

function game(){




}









let computerSelection = getComputerChoice()
let playerSelection = (prompt("Rock, Paper or Scissors?")).toUpperCase()


console.log(playRound(playerSelection, computerSelection))

console.log(getComputerChoice())