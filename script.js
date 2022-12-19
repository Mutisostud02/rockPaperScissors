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
let fail;//for everytime I lose ,to be used to give game results
let win//for every time I win
let compScore=0;
let userScore=0;


function playRound(playerSelection,computerSelection){

  if(playerSelection=='rock' && computerSelection=='paper'){
   compScore++;
  return "you lose!Paper beats rock";
  
  }
  if(playerSelection=='rock' && computerSelection=='scissors'){
   userScore++;
   return "you win!rock beats scissors";
   
   }
   if(playerSelection=='paper' && computerSelection=='rock'){
      userScore++;
   return "you win! Paper beats rock";
   
   }
   if(playerSelection=='paper' && computerSelection=='scissors'){
      compScore++;
   return "you lose! scissors beats paper";
 
   }
   if(playerSelection=='scissors' && computerSelection=='paper'){
      userScore++;
   return "you win! scissors beats paper";

   }
   if(playerSelection=='scissors' && computerSelection=='rock'){
      compScore++;
   return "you lose! rock beats scissors";
   
   }
   if(playerSelection=='rock' && computerSelection=='rock'){
   return "Its a tie!";
   }if(playerSelection=='paper' && computerSelection=='paper'){
   return "Its a tie!";
   }
   if(playerSelection=='scissors' && computerSelection=='scissors'){
   return "Its a tie!";
   }
   if(playerSelection==''){
      compScore++;
      return "you lose! Invalid answer!";
      
     
   }
   if(playerSelection!='scissors' && playerSelection!='paper' && playerSelection!='rock'){
      compScore++;
      return "you lose! Incorrect choice!";
      
   }
}
let arr=[];

function game(){
   for(let i=1;i<6;i++){
   console.log((playRound(player(),getComputerChoice())));

   }
console.log("computer score is: " + compScore);
console.log("user score is : " + userScore);
if(compScore>userScore){
   console.log("GAME OVER!! You Have lost");
}else if(compScore<userScore){
   console.log("CONGRATULATIONS!! You Have Won")
}else{
   console.log("GAME OVER!! No Winner, Reload to Play Again");
}
}

game();
