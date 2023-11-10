var contenedor = document.querySelector('#container');
var boton = document.querySelector('#numerador');
var message = document.querySelector('.mensaje'); // Agrega un punto para seleccionar elementos con la clase 'mensaje'
var cuadrosNegros = document.querySelectorAll('.black'); // Agrega un punto para seleccionar elementos con la clase 'black'
var cuadrosMulticolor = document.querySelectorAll('.multicolor'); // Agrega un punto para seleccionar elementos con la clase 'multicolor'

boton.addEventListener('click', () => {
  var medida = prompt('¿Qué medida desea?');
  contenedor.style.display = 'grid';
  contenedor.style.gridTemplateColumns = `repeat(${medida}, 1fr)`;
  contenedor.style.gridTemplateRows = `repeat(${medida}, 1fr)`;

  function addDiv() {
    var cuadrosAnteriores = document.querySelectorAll('.newDiv');
    cuadrosAnteriores.forEach((x) => {
      contenedor.removeChild(x);
    });

    if (medida < 0 || medida > 100) {
      message.innerHTML = 'Estás loco, amigo.';
    } else {
      message.innerHTML = '¡A jugar!';
      var cuadros = medida * medida;
      for (i = 0; i < cuadros; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'newDiv';
        newDiv.style.border = '1px black solid';
        contenedor.appendChild(newDiv);
      }
    }
  }

  addDiv();
});



