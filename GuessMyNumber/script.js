'use strict';

//console.log(document.querySelector('.message').textContent);

//document.querySelector('.message').textContent = '🎉 Correct Number!!';
//Muda o contexto do elemento HTML com a classe chamada message para o conteudo repsetivo.

//document.querySelector('.number').textContent = 15;
//document.querySelector('.score').textContent = 2;
//Muda o contexto do elemento HTML com a classe chamada message para o conteudo repsetivo.

//console.log(document.querySelector('.guess').value);
//document.querySelector('.guess').value = 23;
//Muda o contexto do elemento HTML com a classe chamada message para o conteudo repsetivo.
//É utilizado o value para redefinir o valor do elemento input no html

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let value = 20;
let highscore = 0;
console.log(document.querySelector(`.guess`).textContent);

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const changeValue = function (value, element) {
  document.querySelector(`.${element}`).textContent = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('😒 No number selected');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!!');
    if (value > highscore) {
      highscore = value;
      changeValue(highscore, 'highscore');
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (value > 1) {
      value--;
      displayMessage(guess > secretNumber ? '📈 TOO HIGH!!' : '📉 TOO LOW!!');
      changeValue(value, 'score');
    } else {
      displayMessage('💣 You lost the game');
      document.querySelector('body').style.backgroundColor = 'red';
      changeValue(0, 'score');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  value = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  changeValue(value, 'score');
  changeValue('?', 'number');
  document.querySelector(`.guess`).value = '';
  displayMessage('Start guessing ...');
});
