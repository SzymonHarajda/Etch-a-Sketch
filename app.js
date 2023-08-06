let boxSize=16;

/*
for tworzy grid planszy 
planasz jest podzielona na rowne kwadraty stworzone przez divi pobrac wielkos panszy i dzielic przez ilosc elementow
hover diva zmienia mu kolor 
suwak wyznacza wielkosc podzialki
guzik za randomowy kolor i czarny 
guzik czyszczcy plansze
guziki dzialaja na onclick event 

*/
grid();
//main fucntion to trace grid 
function grid(){
    for(let i =0;i<boxSize;i++){
        for(let j =0;j<boxSize;j++){
        var grid = document.createElement("div");
        grid.className = "box";
        document.getElementById('grid').appendChild(grid);
        
        }  
    }
}