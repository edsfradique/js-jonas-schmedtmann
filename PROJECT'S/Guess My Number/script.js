'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Valor não permitido
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    // Player vence
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    // Tentativa acima
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lose the game!';
    }

    // Tentativa abaixo
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lose the game!';
    }
  }
});
