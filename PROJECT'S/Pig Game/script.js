'use strict';

// Seletores de elementos
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHoll = document.querySelector('.btn--holl');

// Condições inciais
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

// Roll dice
btnRoll.addEventListener('click', function () {
  // Gera número aleatório
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Exibe o dado correspondente ao número
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Checa se o número é diferente de 1
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    currentScore = 0;
    current0El.textContent = currentScore;
  }
});
