window.onload=function(){

/* تبديل الصفحات */
window.nextPage=function(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if(id==="countdown"){
    startCountdown();
  }
}

/* عد تنازلي */
function startCountdown(){
  let time=5;
  let timer=document.getElementById("timer");
  timer.innerHTML=time;

  let interval=setInterval(()=>{
    time--;
    timer.innerHTML=time;
    if(time<=0){
      clearInterval(interval);
      nextPage("surprise");
    }
  },1000);
}

/* قلوب */
function createHeart(){
  let heart=document.createElement("span");
  heart.innerHTML="💖";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(3+Math.random()*5)+"s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(()=>heart.remove(),8000);
}
setInterval(createHeart,300);

/* Confetti */
window.launchConfetti=function(){
  for(let i=0;i<80;i++){
    let c=document.createElement("span");
    c.style.left=Math.random()*100+"vw";
    c.style.background="hsl("+Math.random()*360+",100%,70%)";
    document.getElementById("confetti").appendChild(c);
    setTimeout(()=>c.remove(),2000);
  }
}

}