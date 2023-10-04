
function getComputerChoice(){
    let num = Math.floor(Math.random()* 3) + 1
    if (num === 1){
     return "ROCK"
    } else if (num === 2) {
     return "PAPER"
    } else {
     return "SCISSORS"
    }
  
 }



function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {

        return "Tie"
        
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        computerPoints++
        return "You Lose! Paper covers Rock."
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        playerPoints++
        return "You Win! Rock crushes Scissors."
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        computerPoints++
        return "You Lose! Scissors cuts Paper."
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerPoints++
        return "You Win! Paper covers Rock."
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerPoints++
        return "You Win! Scissors cut Paper."
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        computerPoints++
        return "You Lose! Rock crushes Scissors."
    } else{
       
        return"You must choose between rock, paper or scissors."  

       
    }      

}
    let computerPoints = 0
    let playerPoints = 0
   

function game(){
    
    
    for (let i = 0; i < 5; i++ ){
    let computerSelection = getComputerChoice()
    let playerSelection = prompt("Choose your weapon!").toUpperCase()
    console.log(playRound(playerSelection, computerSelection))
    console.log("Player Points: " + playerPoints + " Computer Points: " + computerPoints)
    }

    if (playerPoints > computerPoints){
        console.log("Game Over! Congratulations, you won!")
    } else if (playerPoints < computerPoints){
        console.log("Game Over! You lost. Unlucky.")
    } else {
        console.log("Game Over! It's a tie!")
    }
}








game()


















