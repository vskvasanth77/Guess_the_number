"use strict";

//console.log("im visbile");

// document.querySelector(".message").textContent = "newone";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (msg) {
  document.querySelector(".message").textContent = msg;
};

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //no guess

  if (!guess) {
    // document.querySelector(".message").textContent = "⛔No Number";
    displayMessage("⛔No Number");
  }

  //if equal to
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number✅";
    displayMessage("Correct Number✅");

    // document.querySelector(".highscore").textContent = score;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //conditional with no duplicate
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too High !" : "Too Low";

      displayMessage(guess > secretNumber ? "Too High !" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost the Game");
      //document.querySelector(".message").textContent = "You Lost the game 😵";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//if greater than
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too High !";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You Lost the game 😵";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
//   //if lesser than
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too Low !";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You Lost the game 😵";
//       document.querySelector(".score").textContent = 0;
//     }
//   }}

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guesing ....";
  document.querySelector(".score").textContent = "Score";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
