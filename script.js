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
let compScore=0;
let userScore=0;

function playRock(){
      let answ=rockBtn.textContent;
      return answ.toLowerCase();
}
function playPaper(){
   let answ=papBtn.textContent;
   return answ.toLowerCase();
}
function playScissors(){
   let answ=scissBtn.textContent;
   return answ.toLowerCase();
}





function playRound(playerSelection,computerSelection){

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
}
const results=document.querySelector('.results');
const comp=document.querySelector('.comp');
const user=document.querySelector('.user');
const rockBtn=document.querySelector('.rock');
const papBtn=document.querySelector('.paper');
const scissBtn=document.querySelector('.scissors');

rockBtn.addEventListener('click',()=>{
   console.log(playRound(playRock(),getComputerChoice()));
});
papBtn.addEventListener('click',()=>{
   console.log(playRound(playPaper(),getComputerChoice()));
});
scissBtn.addEventListener('click',()=>{
   console.log(playRound(playScissors(),getComputerChoice()));
});



function game(){

}

