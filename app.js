const grid_main=document.querySelector("#grid")
let gridValue = document.querySelector('#grid-size');
let gridSize = document.querySelector('input');
const gridReset = document.querySelector('#reset');

let boxSize=8;

/*
for tworzy grid planszy 
planasz jest podzielona na rowne kwadraty stworzone przez divi pobrac wielkos panszy i dzielic przez ilosc elementow
hover diva zmienia mu kolor 
suwak wyznacza wielkosc podzialki
guzik za randomowy kolor i czarny 
guzik czyszczcy plansze
guziki dzialaja na onclick event 
*/

function createBox(size){
        var div = document.createElement("div");
        div.classList.add('box');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
  return div;
}
grid(boxSize);
//main fucntion to trace grid 
function grid(gridSize){
    for(let i =0;i<boxSize;i++){
        for(let j =0;j<boxSize;j++){
  grid_main.appendChild(createBox(grid_main.clientWidth/gridSize));
         }  
    }
}
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
