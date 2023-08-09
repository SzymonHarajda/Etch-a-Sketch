const grid_main=document.querySelector("#grid")
let gridValue = document.querySelector('#grid-size');
let gridSize = document.querySelector('input');
const gridReset = document.querySelector('#reset');
const black = document.querySelector("#black");
const rainbow = document.querySelector("#rainbow");
let getColor = document.querySelector("#color")
let slider = document.querySelector("#slider");
let boxSize=8;

/*
suwak wyznacza wielkosc podzialki
guziki dzialaja na onclick event 
*/
gridValue.textContent = boxSize+"x"+boxSize;
function createBox(size){
        var div = document.createElement("div");
        div.classList.add('box');
        div.style.width = `${size/16}rem`;
        div.style.height = `${size/16}rem`;
  return div;
}
grid(boxSize);
//main fucntion to trace grid 
function grid(gridSize){
    for(let i =0;i<boxSize;i++){
        for(let j =0;j<boxSize;j++){
 ;grid_main.appendChild(createBox(grid_main.clientWidth/gridSize));
         }  
    }
}

black.addEventListener('click',()=>{
grid_main.addEventListener('mouseover', function (e){
  if(e.target.matches('.box'))
  e.target.style.backgroundColor="black";})
});
function rb(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
return "#"+randomColor;
} 
rainbow.addEventListener('click',()=>{
grid_main.addEventListener('mouseover', function (e){
  if(e.target.matches('.box'))
  e.target.style.backgroundColor=rb();})
});
getColor.addEventListener('input',()=>{
  var newColor= document.getElementById('color').value;
grid_main.addEventListener('mouseover', function (e){
  if(e.target.matches('.box'))
  e.target.style.backgroundColor=newColor;})
});
slider.addEventListener('input',()=>{
  boxSize= document.getElementById("slider").value;
  while(grid_main.firstChild){
    grid_main.removeChild(grid_main.lastChild)
  }
  gridValue.textContent = boxSize+"x"+boxSize;
  grid(boxSize);
});


grid_main.addEventListener('mouseover', function (e) {
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
  }
});
function reset(){
  while(grid_main.firstChild){
    grid_main.removeChild(grid_main.lastChild)
  }
  grid(boxSize);
}

gridReset.addEventListener('click', reset)

