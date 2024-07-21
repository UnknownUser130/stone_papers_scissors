function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function getHumanChoice(){
    let humanChoice=prompt("Enter your choice: ");
    return humanChoice.toLowerCase();
}
humanScore=0, computerScore=0;
function playRound(humanChoice, computerChoice){
    if(humanChoice==computerChoice){
        console.log("Tie!");
    }else if(humanChoice=="rock" && computerChoice=="paper"){
        console.log("You Lose! "+computerChoice+" beats "+humanChoice);
        computerScore++;
    }else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("You Win! "+humanChoice+" beats "+computerChoice);
        humanScore++;
    }else if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You Win! "+humanChoice+" beats "+computerChoice);
        humanScore++;
    }else if(humanChoice=="paper" && computerChoice=="scissors"){
        console.log("You Lose! "+computerChoice+" beats "+humanChoice);
        computerScore++;
    }
}
function playGame(n){
   for(let i=1;i<=n;i++){
       const humanSelection=getHumanChoice();
       const computerSelection=getComputerChoice();
       console.log("Round "+i);
       console.log("You selected: "+humanSelection);
       console.log("computer has selected: "+computerSelection);
       playRound(humanSelection,computerSelection);
}
    if(humanScore>computerScore)
        console.log("You Win the game!");
    else
        console.log("Computer Wins the game");
}

playGame(5);