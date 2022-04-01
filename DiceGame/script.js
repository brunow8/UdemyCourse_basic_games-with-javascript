'use strict';

//Selecting elements
const playerFirstElement = document.querySelector('.player--0');
const firstPlayerScore = document.querySelector('#score--0');
const current1 = document.getElementById('current--0');

const secondPlayerScore = document.getElementById('score--1');
const current2 = document.getElementById('current--1');
const playerSecondElement = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const closeDice = document.querySelector('.dice');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Starting conditions
firstPlayerScore.textContent = 0;
secondPlayerScore.textContent = 0;
closeDice.classList.add('hidden');

const changePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerFirstElement.classList.toggle('player--active');
  playerSecondElement.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    closeDice.classList.remove('hidden');
    closeDice.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Change player
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score

    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if player's score is >= 100
    //Finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      closeDice.classList.add('hidden');
    }
    //Switch to the next player
    changePlayer();
  }
});

btnNew.addEventListener('click', function () {
  if (!playing) {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
    closeDice.classList.remove('hidden');
    document.getElementById(`score--1`).textContent = 0;
    document.getElementById(`score--0`).textContent = 0;
  }
});
