'use strict';

let currentGame = true;
let currentScore = 0;
let currentPlayer = 0;
let globalScore = 0;
let winScore = [0, 0];

const btnNewGame = document.querySelector('#new-game');
const btnRegras = document.querySelector('#regras');
const centralScore = document.querySelector('#score');
const btnRoll = document.querySelector('#roll');
const btnHold = document.querySelector('#hold');
const modal = document.querySelector('.modal');
const btnCloseM = document.querySelector('#close-modal');
const cPlayerScore0 = document.querySelector('#score--0');
const cPlayerScore1 = document.querySelector('#score--1');
const section0 = document.querySelector('#section0');
const section1 = document.querySelector('#section1');
const section = document.querySelectorAll('.section');
const gScore0 = document.querySelector('#global-score0');
const gScore1 = document.querySelector('#global-score1');

btnRegras.addEventListener('click', function () {
  modal.classList.remove('hidden');
});

btnCloseM.addEventListener('click', function () {
  modal.classList.add('hidden');
});

const randomNumber = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#score--${currentPlayer}`).textContent = 0;
  document.querySelector(`#section${currentPlayer}`).classList.remove('select');
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  document.querySelector(`#section${currentPlayer}`).classList.add('select');
  globalScore = 0;
};

const init = function () {
  currentGame = true;
  currentScore = 0;
  currentPlayer = 0;
  globalScore = 0;
  winScore = [0, 0];
  document.querySelector('#score').textContent = 0;
  document.querySelector('#section0').classList.add('select');
  document.querySelector('#section1').classList.remove('select');
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#global-score0').textContent = 0;
  document.querySelector('#global-score1').textContent = 0;
  document.querySelector('#section0').style.backgroundColor = 'white';
  document.querySelector('#section0').style.color = 'black';
  document.querySelector('#section1').style.backgroundColor = 'white';
  document.querySelector('#section1').style.color = 'black';
};

init();

btnRoll.addEventListener('click', function () {
  if (currentGame) {
    globalScore = randomNumber();
    centralScore.textContent = globalScore;
    if (globalScore !== 1) {
      currentScore += globalScore;
      document.querySelector(`#score--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (currentGame) {
    winScore[currentPlayer] += currentScore;
    document.querySelector(`#global-score${currentPlayer}`).textContent =
      winScore[currentPlayer];
    if (!(winScore[currentPlayer] >= 100)) {
      switchPlayer();
    } else {
      currentGame = false;
      document.querySelector(`#section${currentPlayer}`).style.backgroundColor =
        'rgb(63, 180, 63)';
      document.querySelector(`#section${currentPlayer}`).style.color = 'white';
    }
  }
});

btnNewGame.addEventListener('click', init);
