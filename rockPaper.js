function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
/*
const score = {
    wins: 0,
    losses: 0,
    ties: 0,
};
*/

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} computer`

// document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
updateScoreElement()

/*
if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0,
    }
}
*/
// console.log(JSON.parse(localStorage.getItem('score')));



function playGame(playerMove) {
    const computerMove = pickComputer();

    // console.log(computerMove);

    let result = '';
    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose'
        } else if (computerMove === 'Paper') {
            result = 'You Win'
        } else if (computerMove === 'Scissors') {
            result = 'Tie'
        }

        if (result === 'You Win') {
            score.wins = score.wins + 1;

        } else if (result === 'You Lose') {
            score.losses = score.losses + 1;
        } else if (result === 'Tie') {
            score.ties = score.ties + 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} computer`

        // document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        updateScoreElement()


        // alert(`You picked rock. Compuer picked ${computerMove}. ${result} Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);


    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win'
        } else if (computerMove === 'Paper') {
            result = 'Tie'
        } else if (computerMove === 'Scissors') {
            result = 'You Lose'
        }

        if (result === 'You Win') {
            score.wins = score.wins + 1;

        } else if (result === 'You Lose') {
            score.losses = score.losses + 1;
        } else if (result === 'Tie') {
            score.ties = score.ties + 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} computer`

        // document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        

        // alert(`You picked rock. Compuer picked ${computerMove}. ${result} Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie'
        } else if (computerMove === 'Paper') {
            result = 'You Lose'
        } else if (computerMove === 'Scissors') {
            result = 'You Win'
        }


        if (result === 'You Win') {
            score.wins = score.wins + 1;

        } else if (result === 'You Lose') {
            score.losses = score.losses + 1;
        } else if (result === 'Tie') {
            score.ties = score.ties + 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} computer`

        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

        // alert(`You picked rock. Compuer picked ${computerMove}. ${result} Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
        
    }

}



function pickComputer() {
    const ramdomNumber = Math.random();
    let computerMove = '';

    if (ramdomNumber >= 0 && ramdomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (ramdomNumber >= 1 / 3 && ramdomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (ramdomNumber >= 2 / 3 && ramdomNumber < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}