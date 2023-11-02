var container = document.querySelector('#container');
var numerador = document.querySelector('#numerador');


numerador.addEventListener('click', ()=>{
  cuadros = prompt('cuantos cuadros por cuanto cuadros entre 1 y 16:');
  if(cuadros < 1){
    alert('No puede ser un solo cuadro');
  }
  else if(cuadros > 16){
    alert('se pasa la medida');
  }
  else{
    
    cuadros = cuadros**2;
    container.style.display = 'flex'; // Hacer que el contenedor sea flexible
    container.style.flexWrap = 'wrap'
    for(i = 0; i < cuadros; i++){
      agregarElemento();
    };
   };
  }
);

function agregarElemento(){
  var newDiv = document.createElement('div');
  newDiv.style.width = '12px';
  newDiv.style.height = '12px';
  newDiv.style.border = '0.5px solid black';
  newDiv.style.boxSizing = 'border-box';
  newDiv.style.display = 'inline-block';
  container.appendChild(newDiv);
};

