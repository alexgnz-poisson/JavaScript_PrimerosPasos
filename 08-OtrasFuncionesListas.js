const ciudadesDisponibles = new Array("Bogota","Lima", "Santiago","Montevideo");
//console.log(ciudadesDisponibles)


const paisesDisponibles = ["Colombia","Peru","Chile","Brasil","Argentina","Uruguay","Venezuela"];
//console.log(paisesDisponibles);

//length sirve para contar los arreglos que tenemos en este caso son 4
const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

//Remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);
//Remover el ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Filtro de elementos de la lista
//filter((e) => e == 'Brasil')
//tecla comillas simples a lado del 0 ''
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

console.log(paisesDisponibles.join('-'));

//Ordenar listas

console.log(paisesDisponibles.sort());

//conociendo la posicion
//indexOf ayuda a buscar el elemento en este caso estamos buscando 'Peru'

console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf('Peru')}`);

//Unificar 2 listas
//concat ayuda a unir las listas 
const listasPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);

console.log('Lista de paises y ciuadades')
console.log(listasPaisesYCiudades);

console.log('Lista de paises');
console.log(paisesDisponibles);