let height;
let width;
let lifes = 1;
let time = 20;
let level = window.location.search;
level = level.replace("?", "");
let mosquitoTime;

if (level === "easy") {
  mosquitoTime = 1500;
} else if (level === "normal") {
  mosquitoTime = 1000;
} else if (level === "hard") {
  mosquitoTime = 750;
}

const screenAdjustmentGame = function () {
  height = window.innerHeight;
  width = window.innerWidth;
};

screenAdjustmentGame();

const countdown = setInterval(function () {
  time--;
  if (time < 0) {
    clearInterval(countdown);
    clearInterval(createMosquito);
    window.location.href = "win.html";
  } else {
    document.getElementById("countdown").innerHTML = time;
  }
}, 1000);

function randomPosition() {
  //Check if mosquito exist and add a new one and remove the old one
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    if (lifes > 3) {
      window.location.href = "gameOver.html";
    }
    document.getElementById(`v${lifes}`).src = "imagens/coracao_vazio.png";
    lifes++;
  }
  let posicaoX = Math.floor(Math.random() * width) - 100;
  let posicaoY = Math.floor(Math.random() * height) - 100;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  //Creating HTML Elements
  let mosquito = document.createElement("img");
  mosquito.src = "imagens/mosca.png";
  mosquito.className = randomSize() + " " + randomSide();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

function randomSize() {
  let classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

function randomSide() {
  let lado = Math.floor(Math.random() * 2);

  switch (lado) {
    case 0:
      return "sideA";
    case 1:
      return "sideB";
  }
}
