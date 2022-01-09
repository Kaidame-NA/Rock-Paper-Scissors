function computerPlay()
{
	let rng = Math.floor(Math.random()*3);
	switch(rng)
	{
		case 0:
			return "ROCK";
			break;
		case 1:
			return "PAPER";
			break;
		case 2:
			return "SCISSORS";
			break;
	}
}

function resultRound(playerSelection, computerSelection)
{
	playerSelection = playerSelection.toUpperCase();
	if(playerSelection === computerSelection)
	{
		return 0;
	}
	
	switch(playerSelection)
	{
		case "ROCK":
			return computerSelection === "PAPER" ? -1 : 1; 
			break;
		case "PAPER":
			return computerSelection === "SCISSORS" ? -1 : 1; 
			break;
		case "SCISSORS":
			return computerSelection === "ROCK" ? -1 : 1;
			break;
		default:
			return "Invalid Choice";
	}
}

function textRound(playerSelection, computerSelection)
{
	playerSelection = playerSelection.toUpperCase();
	if(playerSelection === computerSelection)
	{
		return "Tie! You both threw " + playerSelection.toLowerCase();
	}
	
	switch(playerSelection)
	{
		case "ROCK":
			return computerSelection === "PAPER" ? "You Lose! Paper beats Rock" : "You Win! Rock beats Scissors"
			break;
		case "PAPER":
			return computerSelection === "SCISSORS" ? "You Lose! Scissors beats Paper" : "You Win! Paper beats Rock"
			break;
		case "SCISSORS":
			return computerSelection === "ROCK" ? "You Lose! Rock beats Scissors" : "You Win! Scissors beats Paper" 
			break;
		default:
			return "Invalid Choice";
	}
}

function onClick(playerChoice)
{
	let playerSelection = playerChoice;
	console.log(playerChoice);
	let computerSelection = computerPlay();
	
	let result = textRound(playerSelection, computerSelection);
	let score = resultRound(playerSelection, computerSelection);

	const resultText = document.querySelector("#result");
	const scoreboard = document.querySelector("#score");

	resultText.textContent = result;
	if(score === 1)
	{
		++playerScore;
	}
	else if(score === -1)
	{
		++computerScore;
	}

	scoreboard.textContent = `Score: ${playerScore} - ${computerScore}` 

	if(playerScore === 5 || computerScore === 5)
	{
		const announce = document.createElement("p");
		if(playerScore === 5)
		{
			announce.textContent = "Player wins!";
		}
		else{
			announce.textContent = "Computer wins!";
		}

		scoreboard.appendChild(announce);
	}
}
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => onClick("rock")); 

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => onClick("paper"));

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => onClick("scissors"));
	
