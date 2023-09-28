console.log("Hello World!")

let num = Math.floor(Math.random()* 3) + 1

function getComputerChoice(){

   if (num === 1){
    return "rock"
   } else if (num === 2) {
    return "paper"
   } else {
    return "scissors"
   }

  
}

console.log(getComputerChoice())