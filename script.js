'use strict';

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

let correctNumber = sortNumber();
console.log(`Correct Number: ${correctNumber}`);

let score = 20;
let highscore = 0;
const message = document.querySelector('.message');

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`Guess: ${guess}`);

  if (score === 0) return;

  if (!guess) {
    message.textContent = '⛔ No number!';
    return;
  }

  if (guess === NaN || guess < 1 || guess > 20) {
    message.textContent = '❌ Guess must be a number between 1 and 20!';
    return;
  }

  if (guess === correctNumber) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    checkHighscore();
  } else if (guess > correctNumber) {
    message.textContent = '📈 Too High!';
    decreaseScore();
  } else if (guess < correctNumber) {
    message.textContent = '📉 Too Low!';
    decreaseScore();
  }
});

againButton.addEventListener('click', function () {
  resetGame();
});

function decreaseScore() {
  Math.max(score--, 0);
  refreshScore();

  if (score === 0) {
    message.textContent = '💥 You lost the game!';
    document.querySelector('body').style.backgroundColor = 'red';
  }
}

function sortNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function refreshScore() {
  document.querySelector('.score').textContent = score;
}

function resetGame() {
  message.textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  refreshScore();

  correctNumber = sortNumber();
}

function checkHighscore() {
  if (score <= highscore) return;
  highscore = score;
  document.querySelector('.highscore').textContent = highscore;
}
