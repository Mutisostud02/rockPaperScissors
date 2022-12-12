function getComputerChoice(){
   const randomChoice=Math.floor(Math.random()*3)+1;
   if(randomChoice==1){
      return 'rock';
   }
   else if(randomChoice==2){
      return 'paper';
   }
   else{
      return 'scissors';
   }
}

function player(){
   let ansr= prompt("Select your rock-paper-scissor choice:");
   return ansr.toLowerCase();
}

function playRound(playerSelection,computerSelection){
  if(playerSelection=='rock' && computerSelection=='paper'){
  return console.log("you lose!Paper beats rock");
  }
  if(playerSelection=='rock' && computerSelection=='scissors'){
   return console.log("you win!rock beats scissors");
   }
   if(playerSelection=='paper' && computerSelection=='rock'){
   return console.log("you win!Paper beats rock");
   }
   if(playerSelection=='paper' && computerSelection=='scissors'){
   return console.log("you lose!scissors beats paper");
   }
   if(playerSelection=='scissors' && computerSelection=='paper'){
   return console.log("you win!scissors beats paper");
   }
   if(playerSelection=='scissors' && computerSelection=='rock'){
   return console.log("you lose!rock beats scissors");
   }
   if(playerSelection=='rock' && computerSelection=='rock'){
   return alert("Play again!");
   }if(playerSelection=='paper' && computerSelection=='paper'){
   return alert("Play again!");
   }
   if(playerSelection=='scissors' && computerSelection=='scissors'){
   return alert("Play again!");
   }



}
console.log(playRound(player(),getComputerChoice()));