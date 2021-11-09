'use strict';

// Implemente uma funcionalidade de descanso do jogo, para que o jogador possa fazer uma nova suposição!

// Selecione o elemento com a classe 'novamente' e anexe um manipulador de eventos de clique

// Na função de manipulador, restaure os valores iniciais da 'pontuação' e
// Variáveis ​​'secretNumber'

// Restaura as condições iniciais da mensagem, número, pontuação e entrada de estimativa
// Campos

// Também restaure a cor de fundo original (# 222) e a largura do número (15rem)

const bCheck = document.querySelector('.check');
const bReset = document.querySelector('.again');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

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
