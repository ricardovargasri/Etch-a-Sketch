/* var contenedor = document.querySelector('#container');
var boton = document.querySelector('#numerador');
var message = document.querySelector('.mensaje');
var cuadrosNegros = document.querySelectorAll('.black'); 
var cuadrosMulticolor = document.querySelectorAll('.multicolor'); 
var dark = document.querySelector('#black');
let color = 'black'

//botones
dark.addEventListener('click', function(){
  setColor('black')
} );


boton.addEventListener('click', ()=>{
  
    var cuadrosAnteriores = document.querySelectorAll('.div');
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
          event.target.style.backgroundColor = colorDiv();
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

function colorDiv(){

};

function setColor(colorChoise){
  let color = colorChoise;
}; */

/* var contenedor = document.querySelector('#container');
var boton = document.querySelector('#numerador');
var message = document.querySelector('.mensaje');
var dark = document.querySelector('#black');
let color = 'black';

// Botones
dark.addEventListener('click', function() {
  setColor('black');
});

boton.addEventListener('click', () => {
  var cuadrosAnteriores = document.querySelectorAll('.newDiv');
  cuadrosAnteriores.forEach((x) => {
    contenedor.removeChild(x);
  });
  let size = getSize();
  createBoard(size);
});

function createBoard(size) {
  contenedor.style.display = 'grid';
  contenedor.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  contenedor.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  totalSize = size * size;
  for (i = 0; i < totalSize; i++) {
    var newDiv = document.createElement('div');

    newDiv.addEventListener('mouseover', function(event) {
      event.target.style.backgroundColor = colorDiv();
    });
    contenedor.insertAdjacentElement('beforeend', newDiv);
  }
}

function getSize() {
  let input = prompt('¿Qué medida desea?');
  if (input < 0 || input > 100) {
    message.innerHTML = 'Estás loco, amigo.';
  } else {
    message.innerHTML = '¡A jugar!';
    return input;
  }
}

function colorDiv() {
  return color;
}

function setColor(colorChoise) {
  color = colorChoise;
} */

var contenedor = document.querySelector('#container');
var boton = document.querySelector('#numerador');
var message = document.querySelector('.mensaje');
var black = document.querySelector('#black');
var multicolor = document.querySelector('#multicolor');
let color = 'black';

// Botones
black.addEventListener('click', function() {
  setColor('black');
});

multicolor.addEventListener('click', function() {
  setColor('multicolor');
});

boton.addEventListener('click', () => {
  clearBoard();
  let size = getSize();
  createBoard(size);
});

function createBoard(size) {
  contenedor.style.display = 'grid';
  contenedor.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  contenedor.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  totalSize = size * size;
  for (i = 0; i < totalSize; i++) {
    var newDiv = document.createElement('div');

    newDiv.addEventListener('mouseover', function(event) {
      if (color === 'multicolor') {
        event.target.style.backgroundColor = getRandomColor();
      } else {
        event.target.style.backgroundColor = color;
      }
    });
    contenedor.insertAdjacentElement('beforeend', newDiv);
  }
}

function clearBoard() {
  var cuadrosAnteriores = document.querySelectorAll('.newDiv');
  cuadrosAnteriores.forEach((x) => {
    contenedor.removeChild(x);
  });
}

function getSize() {
  let input = prompt('¿Qué medida desea?');
  if (input < 0 || input > 100) {
    message.innerHTML = 'Estás loco, amigo.';
  } else {
    message.innerHTML = '¡A jugar!';
    return input;
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

