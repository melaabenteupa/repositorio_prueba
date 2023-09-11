let contenedorDerecho = document.getElementById('contenedor-derecho')
console.log(contenedorDerecho)

contenedorDerecho.style.backgroundColor = "black"

arrastrarElemento(document.getElementById('plaza1'));
arrastrarElemento(document.getElementById('plaza2'));
arrastrarElemento(document.getElementById('plaza3'));
arrastrarElemento(document.getElementById('plaza4'));
arrastrarElemento(document.getElementById('plaza5'));
arrastrarElemento(document.getElementById('plaza6'));
arrastrarElemento(document.getElementById('plaza7'));
arrastrarElemento(document.getElementById('plaza8'));
arrastrarElemento(document.getElementById('plaza9'));
arrastrarElemento(document.getElementById('plaza10'));
arrastrarElemento(document.getElementById('plaza11'));
arrastrarElemento(document.getElementById('plaza12'));
arrastrarElemento(document.getElementById('plaza13'));
arrastrarElemento(document.getElementById('plaza14'));
arrastrarElemento(document.getElementById('plaza15'));
arrastrarElemento(document.getElementById('plaza16'));
arrastrarElemento(document.getElementById('plaza17'));
arrastrarElemento(document.getElementById('plaza18'));

function arrastrarElemento (elemento){
let pos1 = 0
    pos2 = 0
    pos3 = 0 
    pos4 = 0
    elemento.onpointerdown = arrastarPuntero;

    function arrastarPuntero (elemento){
        elemento.preventDefault();
        console.log(elemento);

    }
}
