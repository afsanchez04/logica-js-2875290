
const pantalla = document.getElementById('titulo');
const miBtn = document.getElementById('btn');

//Crear el evento
miBtn.addEventListener('click', function () {
    pantalla.style.color = 'blueviolet'; //cambia el color
    pantalla.innerText = "Ejecutando script 😋"; //Cambia el texto dentro de las etiquetas
})





/* 
let p = {
    style: {
        color: 'rojo',
        fontSize: '3em' 
    },
    innerText: 'holamundo',
    onclick: 'función'
}

p.style.color = 'blue'; */


//contador
//1. captura de variables
const numero = document.getElementById('pantalla');
const mas = document.getElementById('mas');
const menos = document.getElementById('menos');
let i = 0;
//2. Creación de funciones
function incrementar() {
    if (i < 20) {
        i++;
        numero.innerText = i;
    }
}
function decrementar() {
    if (i > 0) {
        i--;
        numero.innerText = i;
    }
}
//3. Llamado y eventos
mas.addEventListener('click', incrementar);
menos.addEventListener('click', decrementar);