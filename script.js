function nextPage(pageNumber) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + pageNumber).classList.add('active');
}

function checkLove() {
  let value = document.getElementById('lovePercent').value;
  let message = document.getElementById('loveMessage');

  if (value >= 99) {
    message.innerHTML = "واو 😍 حب كبير!";
    setTimeout(() => nextPage(3), 1000);
  } else {
    message.innerHTML = "فكري مرة تانية 🤨";
  }
}

/* لعبة ترتيب الحروف */
let sentence = "I LOVE HUSSIEN";
let lettersContainer = document.getElementById("letters");

let shuffled = sentence.split("").sort(() => 0.5 - Math.random());

shuffled.forEach(char => {
  let span = document.createElement("span");
  span.className = "letter";
  span.draggable = true;
  span.innerText = char;
  span.ondragstart = drag;
  lettersContainer.appendChild(span);
});

let dragged;

function drag(e) {
  dragged = e.target;
}

lettersContainer.addEventListener("dragover", e => e.preventDefault());

lettersContainer.addEventListener("drop", e => {
  if (e.target.classList.contains("letter")) {
    lettersContainer.insertBefore(dragged, e.target.nextSibling);
  }
});

function checkSentence() {
  let result = "";
  document.querySelectorAll(".letter").forEach(l => result += l.innerText);

  if (result === sentence) {
    document.getElementById("result").innerHTML =
      "<h1 style='animation: fade 1s;'>I LOVE YOU, RARA 💖✨</h1>";
  } else {
    document.getElementById("result").innerHTML =
      "لسا مش صح 😅 جربي مرة تانية";
  }
}