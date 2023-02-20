

const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const reset = document.querySelector('#reset')
const p1display = document.querySelector('#p1display')
const p2display = document.querySelector('#p2display')
const winningScoreSelect = document.querySelector('#playto')

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let isGameOver = false;

// if game is not yet over the game still goes 

p1button.addEventListener('click', function () {
    if (!isGameOver) {
        p1score += 1;
    }
    if (p1score === winningScore) {
        isGameOver = true;
        p1display.classList.add('has-text-success');
        p2display.classList.add('has-text-danger');
        p1button.disabled = true;
        p2button.disabled = true;
    }
    p1display.textContent = p1score;

})


p2button.addEventListener('click', function () {
    if (!isGameOver) {
        p2score += 1;
    }
    if (p2score === winningScore) {
        isGameOver = true;
        p2display.classList.add('has-text-success');
        p1display.classList.add('has-text-danger');
        p1button.disabled = true;
        p2button.disabled = true;
    }
    p2display.textContent = p2score;
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
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p2display.classList.remove('has-text-success', 'has-text-danger');
    p1display.classList.remove('has-text-success', 'has-text-danger');
    p1button.disabled = false;
    p2button.disabled = false;
}