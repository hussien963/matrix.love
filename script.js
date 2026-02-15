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

/* سودوكو 9x9 سهلة */
const easySudoku = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

function generateSudoku(){
  const grid = document.getElementById("sudoku");
  grid.innerHTML="";
  for(let r=0;r<9;r++){
    for(let c=0;c<9;c++){
      const input=document.createElement("input");
      if(easySudoku[r][c]!==0){
        input.value=easySudoku[r][c];
        input.disabled=true;
      }
      grid.appendChild(input);
    }
  }
}

function checkSudoku(){
  const inputs=document.querySelectorAll("#sudoku input");
  let correct=true;
  let i=0;
  for(let r=0;r<9;r++){
    for(let c=0;c<9;c++){
      const val = inputs[i].value;
      if(easySudoku[r][c]===0){
        if(val==="" || isNaN(val) || val<1 || val>9){
          correct=false;
        }
      }
      i++;
    }
  }
  if(correct){
    puzzle.classList.remove("active");
    finalScreen.classList.add("active");
    startFinal();
  } else {
    document.getElementById("sudokuError").innerText="في خطأ 😏";
  }
}

/* الصفحة الثالثة */
function startFinal(){

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