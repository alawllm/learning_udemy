

const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2display')
}

const reset = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')

let winningScore = 3;
let isGameOver = false;

// if game is not yet over the game still goes 

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
    }
    if (player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})


p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

// updating the winning score 
// function will be executed in the right moment 
// anonymous function passed in as a callback 
// reset function executed inside 

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    resetFunc()
})

// passing the function as an argument 

reset.addEventListener('click', resetFunc)

function resetFunc() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }

}