const screens = [...document.querySelectorAll(".screen")];
function showScreen(id){
  screens.forEach(s=>s.classList.toggle("active",s.id===id));
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-go]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.go)));
const noBtn=document.getElementById("noBtn");
const answerArea=document.querySelector(".answer-area");
const hint=document.getElementById("questionHint");
let noMoves=0;
function moveNo(){
  const area=answerArea.getBoundingClientRect();
  const btn=noBtn.getBoundingClientRect();
  const maxX=Math.max(0,area.width-btn.width);
  const maxY=45;
  const x=Math.random()*maxX-maxX/2;
  const y=(Math.random()-.5)*maxY;
  noBtn.style.position="relative";
  noBtn.style.transform=`translate(${x}px, ${y}px)`;
  noMoves++;
  const messages=["Hehe, try again 🙈","That button is a little shy!","Are you sure? The YES button says hi 💗","The universe is gently suggesting YES ✨"];
  hint.textContent=messages[Math.min(noMoves-1,messages.length-1)];
}
noBtn.addEventListener("mouseenter",moveNo);
noBtn.addEventListener("click",moveNo);
noBtn.addEventListener("touchstart",(e)=>{e.preventDefault();moveNo();},{passive:false});
document.getElementById("yesBtn").addEventListener("click",()=>showScreen("love"));
document.getElementById("againBtn").addEventListener("click",()=>showScreen("welcome"));
// Decorative floating sparkles, generated locally (no external scripts).
const sparkleBox=document.querySelector(".sparkles");
for(let i=0;i<18;i++){
  const s=document.createElement("span");
  s.textContent=i%3===0?"✦":"·";
  s.style.left=Math.random()*100+"%";
  s.style.top=Math.random()*100+"%";
  s.style.animationDelay=(Math.random()*5)+"s";
  sparkleBox.appendChild(s);
}
