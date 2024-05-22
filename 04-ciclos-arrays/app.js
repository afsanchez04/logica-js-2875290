
//Ciclos y arrays
//                  0             1         2         3     
let materias = ['matematicas','sociales','español','fisica']

//Juntando datos con + (concatenar)
console.log( "Tu materia es: " + materias[2] )//español
console.log(' materia 1: ' + materias[0] + ' materia 2: ' + materias[1] + ' materia 3: ' + materias[2])

//Template literals
// ctrl + alt + }
console.log( `Materia 1: ${materias[2]} y después ${materias[0]}` )
console.log( materias[4] );
materias[4] = 'deporte';
console.log(materias)
console.log(`El array materias tiene ${materias.length} elementos`)
console.log( materias[5] );

console.log( Boolean( materias.length >= 6 ) ) ; /// false

//Quiero añadir un elemento al final del array con length
materias[materias.length] = 'pintura';
materias[materias.length] = 'ciencias';
materias.push('lo que sea')
materias.push('musica')
materias.pop()

console.log(materias)




// Ciclos y arrays

//Primera práctica: imprimir en una lista numerada todos los elementos de un array 'películas' con ayuda del ciclo for

let peliculas = ['Harry Potter','Back to the future','Batman','Los 4 fantasticos','Rápidos y furiosos','El chavo','El chapulin','Avatar'];
//inicialización, condición, incremento
for(let i = 0; i < peliculas.length; i++){
    console.log( `${i+1}. ${peliculas[i]}` )
}


//Realizar un programa que le pida artistas o bandas musicales al usuario con ayuda del ciclo while, cuando el usuario escriba "salir" se debe imprimir la lista de artistas que el usuario ingresó. Cada artista añadido se debe guardar en un array

let artistas = [];
let inputUsuario = prompt('dime un artista o "salir" para cerrar')

while(inputUsuario != 'salir'){
    artistas.push(inputUsuario)
    inputUsuario = prompt('dime un artista o "salir" para cerrar')
}
for(let i = 0; i<artistas.length; i++){
    console.log(`${i+1}. ${artistas[i]}`)
}

