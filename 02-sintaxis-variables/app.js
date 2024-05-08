
//console.log('Hola mundo');

/* Declarar variables con var, let, const */

var fruta = 'manzana'; //se puede redeclarar y sobreescribir o reasignar
var fruta = 'pera';
fruta = 'piña';

let pais = 'perú'; //no se puede redeclarar pero si se sobreescribe o reasigna
//let pais = 'perú'; //no es válido
pais = 'francia';

const comida = 'helado'; // no se redeclara ni se sobreescribe o reasigna
// const comida = 'helado'; //no es válido
//comida = 'helado'; //no es válido

console.log(comida) //???


/* Formas correctas de declarar variables */
let nombre = 'pepe';
let nombreMascota = 'pedro';
let nombre_perro = 'bethoveen';
const $caja = 'cosas';
let dia1 = 'lunes';
let edad = 15
let estatura = 1.78;
let disponible = false;

/* Formas incorrectas de declarar variables */
//ctrl + } : comentario de una sola línea

// let 1dia = 'domingo';
// let dia uno = 'domingo';
// let dia-uno = 'domingo';



/* Datos booleanos */

//let entra = confirm('¿Quieres entrar?'); //Puede dar true o false

/* Operadores matemáticos */

console.log( 7*8 ); // Resultado 56

let num1 = 4;
let num2 = 6;

console.log(num1 + num2); // Resultado 10

/* El + tiene dos funciones en javascript: sumar y concatenar (unir) */
let num3 = 4;
let num4 = "6";

/* typeof me dice el tipo de dato de una variable */
let resultado = num3 + num4; // Resultado 46
console.log(resultado); //46
console.log(typeof resultado); //string
console.log('La suma de 4 + "6" es ' + resultado + ' por que no puedes sumar un número con un string');

//Crear una variable (let) que se llame "texto" y va a guardar el resultado de 
//3+"2"+5+"ocho"
//al final imprima el resultado en la consola

