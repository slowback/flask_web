"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighscore = 0;
const showPopup = document.querySelector(".show-popup");
const overlay = document.querySelector(".overlay");
const btnExit = document.querySelector(".exit");
const btnPopupCl = document.querySelector(".play-again");
const btnGoback = document.querySelector(".go-back");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const openPopup = function () {
  showPopup.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closePopup = function () {
  showPopup.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnPopupCl.addEventListener("click", closePopup);

// Test
// document.querySelector(".number").textContent = secretNumber;

// Go back
btnExit.addEventListener("click", openPopup);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When not input
  if (!guess) {
    displayMessage("⛔ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.background = "none";
    document.querySelector("body").style.backgroundColor = "#2ADF99";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > heighscore) {
      heighscore = score;
      document.querySelector(".highscore").textContent = heighscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You list the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Restore game
document.querySelector(".again").addEventListener("click", function () {
  // Set new score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Set new bg-color, message, body
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";

  //Test
  // document.querySelector(".number").textContent = secretNumber;
});
