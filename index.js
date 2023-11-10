var contenedor = document.querySelector('#container');
var boton = document.querySelector('#numerador');
var message  = document.querySelector('.mensaje');

boton.addEventListener('click', ()=>{
    
    var medida = prompt('que medida desea: ');
    contenedor.style.display = 'grid';
    contenedor.style.gridTemplateColumns = `repeat(${medida}, 1fr)`;
    contenedor.style.gridTemplateRows = `repeat(${medida}, 1fr)`;


    function addDiv(){
        var cuadrosAnteriores = document.querySelectorAll('.newDiv');
        cuadrosAnteriores.forEach((x) => {
        contenedor.removeChild(x);
    });
    if(medida < 0 || medida > 100){
        message.innerHTML = 'estas loco mi papa';
    }
    else{
        message.innerHTML = 'a jugar';
        var cuadros = medida * medida
        for(i = 0;i < cuadros; i++){
          var newDiv = document.createElement('div');
          newDiv.className = 'newDiv';
          newDiv.style.border = '1px black solid';
          contenedor.insertAdjacentElement("beforeend",newDiv)  
        };  
    };
    
    };
    addDiv();
});


