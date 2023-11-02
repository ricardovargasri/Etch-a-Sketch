var container = document.querySelector('#container');
var numerador = document.querySelector('#numerador');


numerador.addEventListener('click', ()=>{
  cuadros = prompt('numero de cuadros entre 1 y 136:');
  if(cuadros < 1){
    alert('tu estas loco palomaso');
  }
  else if(cuadros > 136){
    alert('mamaguebaso');
  }
  else{
    size = 100 / cuadros;
   for(i = 0;i>cuadros;i++){
    for (var j = 0; j < cuadros; j++){
    var cuadro = document.createElement('div');
    cuadro.className = 'cuadro';
    cuadro.style.width = size + '%';
    cuadro.style.height = size + '%';
    cuadro.style.border = '0.5px solid black';
    container.appendChild(cuadro);}
    
   } 
  }
});


