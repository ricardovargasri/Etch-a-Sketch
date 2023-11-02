var container = document.querySelector('#container');
var numerador = document.querySelector('#numerador');


numerador.addEventListener('click', ()=>{
  cuadros = prompt('cuantos cuadros desea: ');
  if(cuadros < 1){
    alert('tu estas loco palomaso');
  }
  else{
    alert('mamaguebaso');
  }
});


