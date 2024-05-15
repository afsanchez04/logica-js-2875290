
//Programa que pregunte la edad al usuario (prompt) y depende del valor, decirle si es mayor o menor de edad. 

//let edadUsuario = prompt('cuál es tu edad');

/* if( edadUsuario >= 18 ){
    console.log('Eres mayor de edad')
}else{
    console.log('Eres menor de edad')
} */

//Depende del color del semaforo le damos un mensaje al usuario si pone un color diferente a rojo, amarillo o verde dirá "no se que hacer"
//.toLowerCase() // transforma el texto en minúscula
let color = prompt('¿Color semaforo?').toLowerCase();

if( color === 'rojo' ){
    console.log('Dentente')
}else if( color === 'amarillo' ){
    console.log('Preparese')
}else if( color === 'verde' ){
    console.log('Arranque')
}else{
    console.log('No se que hacer')
}