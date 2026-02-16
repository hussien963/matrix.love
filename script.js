let randomNumber;

function startGame() {
  document.getElementById("startScreen").classList.remove("active");
  document.getElementById("gameScreen").classList.add("active");
  randomNumber = Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (!guess) {
    message.textContent = "ادخل رقم أولاً!";
    return;
  }

  if (guess === randomNumber) {
    document.getElementById("gameScreen").classList.remove("active");
    document.getElementById("finalScreen").classList.add("active");
  } else {
    message.textContent = "حاولي مرة تانية 😉";
  }
}