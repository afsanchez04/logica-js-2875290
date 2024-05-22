
// Funciones 
//Función que salude al usuario

/* let nombreUsuario = prompt('dime tu nombre')

//Declaración de una función 
function saludar ( nombre = 'desconocido' ){
    console.log('Función ejecutada...')
    return `Bienvenido ${nombre}`
    console.log('Esto nunca se va a ver')
}
//llamado de una función 
console.log(  saludar ( nombreUsuario )  ) */

//Hacer una función que multiplique dos números. La función debe retornar solamente el resultado de la operación. Llamar a la función "multiplicar"

let n1 = prompt('numero 1');
let n2 = prompt('numero 2');
function multiplicar(num1,num2){
    return num1 * num2
}
console.log( `El resultado es: ${ multiplicar(n1,n2) }` )

//Crear una función que le diga cuanto debe ahorrar al mes según sus ingresos. Que la función se llame "calcularAhorro"


