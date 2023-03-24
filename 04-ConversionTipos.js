//Tipos de Datos
//Alfanumerico
//const no cambia en el tiempo,como su nombre lo dice es una constante 

//let nombrePasajero = "Pedro Silva";
//nombrePasajero  = "Ramon Silva";

//Dato numerico
//uno puede mezclar const y let siempre que sean numericos 
let valorBoleto = 1000;
const impuestoAeropuesto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

//Logicos (true , false)

let boletoActivo = true;

//Operaciones aritmeticas 
//suma
//let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;

//Orden de precedencia 
//()
//* y / 
//+ y -
//Es importante el uso correcto de () al momento de hacer operaciones, ya que nos pueden dar otros resultados 

let totalBoletos = (valorBoleto + impuestoAeropuesto) + (valorBoleto + impuestoAeropuesto) * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos);

//Concatenacion de Texto 
//Js tiene particularidad de que cuando sumas y esta entre comillas o comillas simples es alfanumerico, osea cadena de caracteres 

let nombrePasajero = "Alexander";
let apellidoPasajero = "Pavon";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = '100' + '12';
let multiplicacion = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

//Al imprimir sale NaN que es Not a Number 
let noEsUnNumero = parseInt('ALEX');
console.log(noEsUnNumero);
