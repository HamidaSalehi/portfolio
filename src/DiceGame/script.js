"use strict";
const score_0 = document.getElementById("score--0");
const score_1 = document.querySelector("#score--1");
const dice = document.querySelector(".dice");

const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");
const btn_new = document.querySelector(".btn--new");

const current_0 = document.getElementById("current--0");
const current_1 = document.getElementById("current--1");

const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");

let scores, activeplayer, carrentscore, isGameplaing;
function init() {
  scores = [0, 0];
  carrentscore = 0;
  activeplayer = 0;
  isGameplaing = true;

  score_0.textContent = 0;
  score_1.textContent = 0;

  dice.classList.add("hidden");
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.getElementById(`current--0`).textContent = carrentscore;
  document.getElementById(`current--1`).textContent = carrentscore;
}
init();

function swithplayer() {
  carrentscore = 0;
  document.getElementById(`current--${activeplayer}`).textContent =
    carrentscore;
  activeplayer = activeplayer == 0 ? 1 : 0;
  player_0.classList.toggle("player--active");
  player_1.classList.toggle("player--active");
}
btn_roll.addEventListener("click", function () {
  if (isGameplaing) {
    const diceRandimNumber = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${diceRandimNumber}.png`;
    dice.classList.remove("hidden");
    if (diceRandimNumber !== 1) {
      carrentscore += diceRandimNumber;
      document.getElementById(`current--${activeplayer}`).textContent =
        carrentscore;
    } else {
      swithplayer();
    }
  }
});

btn_hold.addEventListener("click", function () {
  if (isGameplaing) {
    scores[activeplayer] += carrentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 20) {
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
      dice.classList.add("hidden");
      isGameplaing = false;
    } else {
      swithplayer();
    }
  }
});

btn_new.addEventListener("click", init);
