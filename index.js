var contenedor = document.querySelector('#container');

var cantidad = document.querySelector('#numerador');
cantidad.addEventListener('click', ()=>{
  let cuadros = prompt('cuantos cuadros desea');
  contenedor.innerHTML = '';
  if(cuadros === '' ){
    alert('debes introducir un numero');
  }
  else if(cuadros < 1 || cuadros > 100){
    alert('introduce un numero entre 1 y 100')
  }
  else{
    contenedor.style.display = 'grid';
  contenedor.style.gridTemplateColumns = `repeat(${cuadros}, 1fr)`;
  contenedor.style.gridTemplateRows = `repeat(${cuadros}, 1fr)`;
  
  totalDivs = cuadros * cuadros;
  for(i = 0; i < totalDivs; i++){
    let newDiv = document.createElement('div');
    newDiv.className = 'div';
    newDiv.style.border = '0.5px green solid';
    
    contenedor.appendChild(newDiv);
    newDiv.addEventListener('mouseover', ()=>{
      newDiv.style.backgroundColor = 'black';
      newDiv.style.border = '0.5px red solid';
    })
  }
  }
  

  
}
);






