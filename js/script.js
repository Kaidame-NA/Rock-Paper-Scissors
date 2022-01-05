function computerPlay()
{
	let rng = Math.floor(Math.random()*3);
	switch(rng)
	{
		case 0:
			return "Rock";
			break;
		case 1:
			return "Paper";
			break;
		case 2:
			return "Scissors";
			break;
	}
}


