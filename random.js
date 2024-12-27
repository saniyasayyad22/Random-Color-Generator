let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let head= document.querySelector("h1");
    let random=randomColor();
    head.innerText=random;
    let box=document.querySelector("div");
    box.style.backgroundColor=random;
});
function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let ranCol=`rgb(${red},${green},${blue})`;
    return ranCol;
}