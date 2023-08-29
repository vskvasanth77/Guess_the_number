"use strict";

//console.log("im visbile");

// document.querySelector(".message").textContent = "newone";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔No Number";
  }

  //if equal to
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number✅";

    document.querySelector(".highscore").textContent = score;
  }
  //if greater than
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game 😵";
      document.querySelector(".score").textContent = 0;
    }
  }
  //if lesser than
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game 😵";
      document.querySelector(".score").textContent = 0;
    }
  }
});
