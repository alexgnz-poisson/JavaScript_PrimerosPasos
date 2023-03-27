const ciudadesDisponibles = new Array("Bogota","Lima", "Santiago","Montevideo");
const precioCiudad = new Array(500,400,300,200);
//Las llaves definen esto como un mapa 
const datos = [
    {
        'ciudad':'Bogota',
        'precio':500
    },
    {
        'ciudad':'Lima',
        'precio':400
    },
    {
        'ciudad':'Santiago',
        'precio':380
    },
    {
        'ciudad':'Montevideo',
        'precio':200
    },
];

const presupuestoDisponible = 190;

let i = 0;
//while 0 o mas veces
//Do while, 1 o mas veces

// while(i < datos.length && datos[i].precio > presupuestoDisponible ){
//     i++;
// }
let ciudadSeleccionada = '';
do{
    if(datos[i].precio < presupuestoDisponible ){
        ciudadSeleccionada = datos[i].ciudad;
        //esto rompe el lazo
        break;
    }
    i++;
} while(i < datos.length && ciudadSeleccionada =='' );
if(ciudadSeleccionada == ''){
    console.log("No tenemos pasajes disponibles");
}
else{
    console.log("Puedes comprar pasaje para: "+ciudadSeleccionada);

}

