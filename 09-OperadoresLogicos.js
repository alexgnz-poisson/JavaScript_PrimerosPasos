//Operadores de comparacion

const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima", "Santiago","Montevideo");

//Palabra reservada If
// if(ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
//     console.log('Pasaje disponible para venta ');
// }
// else{
//     console.log('Ciudad no disponible para viajar');
// }

// const valorPasaje = "1000";

// if(valorPasaje == 1000){
//     console.log('El pasaje vale 1000');
// }

// console.log(`Verificando pasajes para : ${ciudadDestino}`);
// if(ciudadesDisponibles.indexOf(ciudadDestino) > -1){
//     console.log('Pasaje disponible para venta');
// }
// else{
//     console.log('Ciudad no disponible para viajar');
// }



//Operadors logicos 
// && se deben cumplir las 2 condiciones
// OR = || Se debe cumplir una condicion al menos
// ! No se cumple la condicion
let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasajes para : ${ciudadDestino}`);
if(ciudadesDisponibles.indexOf(ciudadDestino) > -1 && 
    (edadPasajero >= 18 || estaAcompanado)){
    console.log('Pasaje disponible para venta');
    }
    else{
    console.log('Ciudad no disponible para viajar O pasajero no cumple las reglas');
}

//Aplicando logica negatica 
edadPasajero = 17;
estaAcompanado = false;

if(!((ciudadesDisponibles.indexOf(ciudadDestino) > -1)&&
(edadPasajero >= 18 || estaAcompanado))){
    console.log('Ciudad no disponible para viajar O pasajero no cumple las reglas');
}else{
    console.log('Pasaje disponible para venta');
}