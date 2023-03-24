//Palabra reservada Const 
//Que es un espacio de memoria que luego de asignar su valor no cambia en el tiempo 

const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = "Alexander";
const apellidoPasajero = "Pavon";

console.log(nombrePasajero);
console.log(apellidoPasajero);

//Let
//Espacio de memoria que puede cambiar durante la ejecucion del programa 

let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);

//var
//Espacio de memoria que puede cambiar durante la ejecucion del programa 
//Esta dejandose de usar
//El alcande 

var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

//bloque
{
    console.log(nombreCompletoDelPasajero);
}