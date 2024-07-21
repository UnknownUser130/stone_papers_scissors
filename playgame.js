function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice(humanChoice){
    return humanChoice.toLowerCase();
}
let humanScore=0, computerScore=0;
function playRound(humanChoice){
    const computerChoice= getComputerChoice();
    humanChoice=getHumanChoice(humanChoice);
    if (!['rock', 'paper', 'scissors'].includes(humanChoice)) {
        result = "Invalid choice! Please choose rock, paper, or scissors.";
    } else if (humanChoice == computerChoice) {
        result = "Tie!";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        result = "You Lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        result = "You Win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        result = "You Win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        result = "You Lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        result = "You Win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        result = "You Lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    
    if (humanScore === 5) {
        winner = "Congratulations! You are the overall winner!";
        disableButtons();
    } else if (computerScore === 5) {
        winner = "The computer is the overall winner!";
        disableButtons();
    }

    document.getElementById('result').innerText = result;
    document.getElementById('score').innerText = `Score: Human ${humanScore} - ${computerScore} Computer`;
    document.getElementById('winner').innerText = winner;
}
function disableButtons() {
    document.querySelectorAll('button').forEach(button => {
        button.disabled = true;
    });
}