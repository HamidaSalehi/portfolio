'use strict';
document.querySelector('.guess').value = '';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.score').textContent = score;
let highScoe = 0;
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(typeof guessNumber);

  if (!guessNumber) {
    Displaymessage('No number!');
  }
  //win
  else if (secretNumber == guessNumber) {
    Displaymessage('correct guess 🏆');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScoe) {
      highScoe = score;
      document.querySelector('.highscore').textContent = highScoe;
    }
  } else if (secretNumber !== guessNumber) {
    if (score > 1) {
      Displaymessage(secretNumber > guessNumber ? 'low' : 'high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      Displaymessage('You lose the game!');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
  /*
  //low
  else if (secretNumber > guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
  //high
  else if (secretNumber < guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  Displaymessage('Start Guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

function Displaymessage(message) {
  document.querySelector('.message').textContent = message;
}
