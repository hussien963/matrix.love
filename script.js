const intro = document.getElementById("intro");
const puzzle = document.getElementById("puzzle");
const finalScreen = document.getElementById("final");

document.getElementById("startBtn").onclick = () => {
  intro.classList.remove("active");
  puzzle.classList.add("active");
};

/* المرحلة 1 */
function checkLove(){
  const val = document.getElementById("loveInput").value;
  if(val > 95){
    document.getElementById("stage1").style.display="none";
    document.getElementById("stage2").style.display="block";
    generateSudoku();
  } else {
    document.getElementById("loveError").innerText="هممم... فكري منيح 😌";
  }
}

/* سودوكو 4x4 بسيطة */
const solution = [
  [1,2,3,4],
  [3,4,1,2],
  [2,1,4,3],
  [4,3,2,1]
];

function generateSudoku(){
  const grid = document.getElementById("sudoku");
  grid.innerHTML="";
  for(let r=0;r<4;r++){
    for(let c=0;c<4;c++){
      const input=document.createElement("input");
      if((r+c)%2===0){
        input.value=solution[r][c];
        input.disabled=true;
      }
      grid.appendChild(input);
    }
  }
}

function checkSudoku(){
  const inputs=document.querySelectorAll("#sudoku input");
  let i=0;
  for(let r=0;r<4;r++){
    for(let c=0;c<4;c++){
      if(!inputs[i].disabled){
        if(parseInt(inputs[i].value)!==solution[r][c]){
          document.getElementById("sudokuError").innerText="في خطأ 😏";
          return;
        }
      }
      i++;
    }
  }
  puzzle.classList.remove("active");
  finalScreen.classList.add("active");
  startFinal();
}

/* الصفحة الثالثة */
function startFinal(){

  // كتابة الشعر تدريجياً
  const text = `رجف الفؤادُ امام حسنك مثلما
رجفت بكف الثاملين كؤوسُ

عيناك قوس لا اطيق سهامه
كفي فدرعي من سهامك يهزم`;
  const poem = document.getElementById("poem");
  let i=0;
  const typing=setInterval(()=>{
    poem.innerText+=text[i];
    i++;
    if(i>=text.length) clearInterval(typing);
  },40);

  // عداد الاشتياق
  const startDate = new Date("2009-02-05");
  const counter = document.getElementById("counter");
  setInterval(()=>{
    const now=new Date();
    const diff=now-startDate;
    const days=Math.floor(diff/(1000*60*60*24));
    counter.innerText=`صارلي مشتاقلك من ${days} يوم 💜`;
  },1000);

  // قلوب 3D
  setInterval(()=>{
    const heart=document.createElement("div");
    heart.className="heart";
    heart.style.left=Math.random()*100+"%";
    document.getElementById("heart3d").appendChild(heart);
    setTimeout(()=>heart.remove(),10000);
  },500);
}

document.getElementById("revealBtn").onclick=()=>{
  alert("اشتقتلك قد هالكون 💜");
};