const ciudad1 = "Londres";
const ciudad2 = "Nueva York";
const ciudad3 = "Madrid";

//Definicion de una lista de con tipo de datos alfanumericos 
const ciudadesDisponibles = new Array("Londres","Nueva York","Madrid");
console.log(ciudadesDisponibles)

//Definicion de una lista de forma abreviada.

const paisesDisponibles = ["Canada","Italia","Brasil"];
console.log(paisesDisponibles);

paisesDisponibles.push('Uruguay');
ciudadesDisponibles.push('Monte Video');

console.log(ciudadesDisponibles)
console.log(paisesDisponibles);

paisesDisponibles.unshift('China');
ciudadesDisponibles.unshift('CDMX');

console.log(ciudadesDisponibles)
console.log(paisesDisponibles);

//Mostrando el primer elemento de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

//splice(desde donde,cuantos elementos a borrar,agregar elementos)
paisesDisponibles.splice(1,2,'Venezuela','Paraguay');
console.log(paisesDisponibles);


