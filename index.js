var contenedor = document.querySelector('#container');
var boton = document.querySelector('#numerador');
var message = document.querySelector('.mensaje');
var cuadrosNegros = document.querySelectorAll('.black'); 
var cuadrosMulticolor = document.querySelectorAll('.multicolor'); 

boton.addEventListener('click', ()=>{
  
    var cuadrosAnteriores = document.querySelectorAll('.newDiv');
    cuadrosAnteriores.forEach((x) => {
    contenedor.removeChild(x);
    });
  let size = getSize();
  createBoard(size);
}
);
function createBoard(size){
  contenedor.style.display = 'grid';
  contenedor.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  contenedor.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  totalSize = size * size;
  for (i = 0; i < totalSize; i++) {
        var div = document.createElement('div');
        div.addEventListener('mouseover', function(event){
          event.target.style.backgroundColor = 'black';
        });
        contenedor.insertAdjacentElement("beforeend", div);
      };
};
function getSize(){
  let input = prompt('¿Qué medida desea?');
  if(input < 0 || input > 100){
    message.innerHTML = 'Estás loco, amigo.';
  }
  else{
    message.innerHTML = '¡A jugar!';
    return input;
  }
  
};




