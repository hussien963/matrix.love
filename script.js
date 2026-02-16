window.onload = function(){

window.goTo = function(num){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+num).classList.add("active");
}

window.checkLove = function(){
  let val = document.getElementById("loveInput").value;
  let msg = document.getElementById("loveMsg");

  if(val == 99 || val == 100){
    msg.innerHTML = "صح 😍";
    setTimeout(()=>goTo(3),800);
  }else{
    msg.innerHTML = "فكري مرة تانية 🤨";
  }
}

let sentence = "I LOVE HUSSIEN";
let container = document.getElementById("letters");
let shuffled = sentence.split("").sort(()=>0.5-Math.random());
let selected = [];

shuffled.forEach(char=>{
  let span = document.createElement("span");
  span.className="letter";
  span.innerText=char;
  span.onclick=function(){
    selected.push(char);
    span.style.visibility="hidden";
  }
  container.appendChild(span);
});

window.checkSentence = function(){
  if(selected.join("") === sentence){
    document.getElementById("gameMsg").innerHTML="ممتاز 💖";
    setTimeout(()=>{ goTo(4); startCountdown(); },1000);
  }else{
    document.getElementById("gameMsg").innerHTML="جربي مرة تانية 😅";
  }
}

function startCountdown(){
  let time=5;
  let timer=document.getElementById("timer");
  timer.innerHTML=time;
  let interval=setInterval(()=>{
    time--;
    timer.innerHTML=time;
    if(time<=0){
      clearInterval(interval);
      goTo(5);
    }
  },1000);
}

window.launchConfetti=function(){
  for(let i=0;i<50;i++){
    let c=document.createElement("span");
    c.style.left=Math.random()*100+"vw";
    c.style.background="hsl("+Math.random()*360+",100%,70%)";
    document.getElementById("confetti").appendChild(c);
    setTimeout(()=>c.remove(),2000);
  }
}

}