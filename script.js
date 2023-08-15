'use strict';

let secreatNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreatNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered 👿';
    // Winning logic
  } else if (guess === secreatNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('.number').textContent = secreatNumber;
    document.querySelector('.number').style.width = '35rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // Loosing conditions
  else if (guess < secreatNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low ....!!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.message').textContent =
        ' You have Lost The game !!';
      document.querySelector('.guess').value = '';
    }
  } else if (guess > secreatNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high ! ....';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.message').textContent =
        ' You have Lost The game';
      document.querySelector('.guess').value = '';
    }
  }
});

// reset
document.querySelector('.again').addEventListener('click', function () {
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secreatNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
});
