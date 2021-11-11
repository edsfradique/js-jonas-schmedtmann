'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const message = (text) => {
  return (document.querySelector('.message').textContent = text);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    message('Número inválido!');
    // message.textContent = 'Número inválido!';
  } else if (guess === randomNumber) {
    message('Número Correto!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      guess > randomNumber ? message('Acima!') : message('Abaixo!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      message('Você perdeu!');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  const guess = Number((document.querySelector('.guess').value = ''));
  message('Comece a adivinhar...');
  // const message = (document.querySelector('.message').textContent =
  //   'Comece a adivinhar...');
});
