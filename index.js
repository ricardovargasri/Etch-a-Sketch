//
let mensaje = document.querySelector('.mensaje');
var contenedor = document.querySelector('#container');
let black = document.querySelector('#black');
black.style.display = 'none';
// Variable que comprueba si el botón negro fue tocado
let blackClick = false;
let multicolor = document.querySelector('#multicolor');
multicolor.style.display = 'none';
// Variable que comprueba si el botón multicolor fue seleccionado
let multicolorClick = false;

black.addEventListener('click', () => {
  blackClick = true;
  multicolorClick = false;
});

multicolor.addEventListener('click', () => {
  blackClick = false;
  multicolorClick = true;
});

var cantidad = document.querySelector('#numerador');
cantidad.addEventListener('click', () => {
  let cuadros = prompt('¿Cuántos cuadros deseas?');
  contenedor.innerHTML = '';
  if (cuadros === '') {
    mensaje.innerHTML = 'adiciona un numero de cuadros';
  } else if (cuadros < 1 || cuadros > 100) {
    mensaje.innerHTML = 'el valor debe ser entre 1 y 100';
    
  } else {
    mensaje.innerHTML = 'A jugar';
    black.style.display = 'inline';
    multicolor.style.display = 'inline';
    contenedor.style.display = 'grid';
    contenedor.style.gridTemplateColumns = `repeat(${cuadros}, 1fr)`;
    contenedor.style.gridTemplateRows = `repeat(${cuadros}, 1fr)`;

    totalDivs = cuadros * cuadros;
    for (let i = 0; i < totalDivs; i++) {
      let newDiv = document.createElement('div');
      newDiv.className = 'div';
      newDiv.style.border = '0.5px gray solid';
      newDiv.addEventListener('mouseover', () => {
        if (blackClick) {
          newDiv.style.backgroundColor = 'black';
        } else if (multicolorClick) {
          newDiv.style.backgroundColor = pluricolor();
        }
      });

      contenedor.appendChild(newDiv);
    }
  }
});

function pluricolor() {
  // Generar valores aleatorios para los componentes RGB
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Construir el formato hexadecimal del color
  var colorHex = '#' + decToHex(r) + decToHex(g) + decToHex(b);

  return colorHex;
}

// Función auxiliar para convertir un número decimal a hexadecimal
function decToHex(dec) {
  return dec.toString(16).padStart(2, '0');
}
