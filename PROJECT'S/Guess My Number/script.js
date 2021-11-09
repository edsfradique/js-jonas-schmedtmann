'use strict';

const bCheck = document.querySelector('.check');
const bReset = document.querySelector('.again');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

bCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  console.log(guess);

  if (!guess) {
    message.textContent = 'Número inválido!';
  } else if (guess === randomNumber) {
    message.textContent = 'Número Correto!';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      message.textContent = 'Acima!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'Você perdeu!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      message.textContent = 'Abaixo!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'Você perdeu!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

bReset.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  const guess = Number((document.querySelector('.guess').value = ''));
  const message = (document.querySelector('.message').textContent =
    'Comece a adivinhar...');
});
