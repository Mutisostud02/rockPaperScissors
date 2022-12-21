//function to get computer choice through generating random numbers
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

//function to take player choice of rock button and return its string lowercase value
function playRock(){
      let answ=rockBtn.textContent;//takes the text content of the rock button
      return answ.toLowerCase();
}
//function to take the player choice of paper
function playPaper(){
   let answ=papBtn.textContent;//takes the text content of the paper button
   return answ.toLowerCase();
}
//function to take the player choice of scissors
function playScissors(){
   let answ=scissBtn.textContent;//takes the text content of the scissors button
   return answ.toLowerCase();
}

let compScore=0;//score for the computer to be incremented when computer wins a round
let userScore=0;//player score to be incremented when player wins a round


//function that plays the player choice against the comp choice and gives result while incrementing the scores
function playRound(playerSelection,computerSelection){
   if(compScore<5 && userScore<5){
  if(playerSelection=='rock' && computerSelection=='paper'){
   comp.textContent="Our Score Is " + ++compScore;
  return results.textContent="you lose!Paper beats rock";
  
  }
  if(playerSelection=='rock' && computerSelection=='scissors'){
   user.textContent="Your Score Is " + ++userScore;
   return results.textContent="you win!rock beats scissors";
   
   }
   if(playerSelection=='paper' && computerSelection=='rock'){
      user.textContent="Your Score Is " + ++userScore;
   return results.textContent="you win! Paper beats rock";
   
   }
   if(playerSelection=='paper' && computerSelection=='scissors'){
     comp.textContent="Our Score Is " + ++compScore;
   return results.textContent="you lose! scissors beats paper";
 
   }
   if(playerSelection=='scissors' && computerSelection=='paper'){
      user.textContent="Your Score Is " + ++userScore;
   return results.textContent="you win! scissors beats paper";

   }
   if(playerSelection=='scissors' && computerSelection=='rock'){
      comp.textContent="Our Score Is " + ++compScore;
   return results.textContent="you lose! rock beats scissors";
   
   }
   if(playerSelection=='rock' && computerSelection=='rock'){
   return results.textContent="Its a tie!";
   }if(playerSelection=='paper' && computerSelection=='paper'){
   return results.textContent="Its a tie!";
   }
   if(playerSelection=='scissors' && computerSelection=='scissors'){
   return results.textContent="Its a tie!";
   }
   if(playerSelection==''){
      comp.textContent="Our Score Is " + ++compScore;
      return results.textContent="you lose! Invalid answer!";
      
     
   }
   if(playerSelection!='scissors' && playerSelection!='paper' && playerSelection!='rock'){
      comp.textContent="Our Score Is " + ++compScore;
     return results.textContent="you lose! Incorrect choice!";
      
   }
}else if(compScore==5 || userScore==5){
   if(compScore==5){
      return winner.textContent="GAME OVER!! YOU LOSE";
   }else if(userScore==5)
   return winner.textContent="CONGRATULATIONS!! YOU WON";
   
}

}

//getting DOM elements 
const winner=document.querySelector('.winner');
const results=document.querySelector('.results');
const comp=document.querySelector('.comp');
const user=document.querySelector('.user');
const rockBtn=document.querySelector('.rock');
const papBtn=document.querySelector('.paper');
const scissBtn=document.querySelector('.scissors');

//plays the game round when the button is clicked,taking in the rock button function created earlier
rockBtn.addEventListener('click',()=>{
   console.log(playRound(playRock(),getComputerChoice()));
});

//plays the game round when the button is clicked,taking in the paper button function created earlier
papBtn.addEventListener('click',()=>{
   console.log(playRound(playPaper(),getComputerChoice()));
});

//plays the game round when the button is clicked,taking in the scissors button function created earlier
scissBtn.addEventListener('click',()=>{
   console.log(playRound(playScissors(),getComputerChoice()));
});




