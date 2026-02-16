let currentPage = 0;
const slider = document.querySelector(".slider");

function goToPage(index) {
  currentPage = index;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById("nextBtn").onclick = () => goToPage(1);

document.getElementById("checkLoveBtn").onclick = () => {
  let value = document.getElementById("lovePercent").value;
  let msg = document.getElementById("loveMessage");

  if (value >= 99) {
    msg.innerHTML = "واااو 😍";
    setTimeout(() => goToPage(2), 800);
  } else {
    msg.innerHTML = "فكري مرة تانية 🤨";
  }
};

/* لعبة الحروف */
let sentence = "I LOVE HUSSIEN";
let container = document.getElementById("letters");
let shuffled = sentence.split("").sort(() => 0.5 - Math.random());

shuffled.forEach(char => {
  let span = document.createElement("span");
  span.className = "letter";
  span.draggable = true;
  span.innerText = char;
  span.ondragstart = e => dragged = span;
  container.appendChild(span);
});

let dragged;

container.ondragover = e => e.preventDefault();

container.ondrop = e => {
  if (e.target.classList.contains("letter")) {
    container.insertBefore(dragged, e.target.nextSibling);
  }
};

document.getElementById("checkSentenceBtn").onclick = () => {
  let result = "";
  document.querySelectorAll(".letter").forEach(l => result += l.innerText);

  if (result === sentence) {
    document.getElementById("result").innerHTML =
      "<div class='success'>I LOVE YOU, RARA 💖✨</div>";
    launchConfetti();
  }
};

/* قلوب طايرة */
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 5) + "s";
  document.querySelector(".hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 300);

/* Confetti */
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const conf = document.createElement("span");
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.background = `hsl(${Math.random()*360},100%,70%)`;
    document.getElementById("confetti").appendChild(conf);
    setTimeout(() => conf.remove(), 2000);
  }
}