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

function playRound(playerSelection, computerSelection)
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

function game()
{
	for(let i = 0; i < 5; ++i)
	{
		let playerSelection = prompt("Select an object: ");
		let computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
	}
}
