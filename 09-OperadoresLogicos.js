//Operadores de comparacion

const ciudadDestino = "Mexico";
const ciudadesDisponibles = new Array("Bogota","Lima", "Santiago","Montevideo");

//Palabra reservada If
if(ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
    console.log('Pasaje disponible para venta ');
}
else{
    console.log('Ciudad no disponible para viajar');
}

const valorPasaje = "1000";

if(valorPasaje == 1000){
    console.log('El pasaje vale 1000');
}

//operadores logicos 

console.log(`Verificando pasajes para : ${ciudadDestino}`);
if(ciudadesDisponibles.indexOf(ciudadDestino) > -1){
    console.log('Pasaje disponible para venta');
}
else{
    console.log('Ciudad no disponible para viajar');
}