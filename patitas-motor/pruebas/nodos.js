const Nodo = require('../src/Nodo');


const  dato1 = new Nodo(
    {
        fecha : "02/02" ,
        motivo: "vacunacion",
        veterinario: "Dra.Rios",
        costo : 85000,
    }
)
  const dato2 = new Nodo(
    {
        fecha : "15/03" ,
        motivo: "control de peso",
        veterinario: "Dr.Gomez",
        costo : 40000,
    }
  )
   const dato3 = new Nodo(
    {
        fecha : "20/05" ,
        motivo: "limpieza dental",
        veterinario: "Dra.Rios",
        costo : 150000,
    }
   )
    dato1.siguiente = dato2
    dato2.siguiente = dato3
    
    
let cabeza = dato1

function RecorrerListaEnlazada(actual) {
    
    while (actual !== null) {

        console.log(actual.dato); 
        actual = actual.siguiente;
    }
}

function CalcularTotalCostos(actual) 
{
    let total = 0;
    while (actual !== null) 
        {
            total += actual.dato.costo;
            actual = actual.siguiente;
        }
    console.log("Total de costos = ", total);
}



CalcularTotalCostos(cabeza);
RecorrerListaEnlazada(cabeza);

module.exports = {dato1, dato2, dato3, cabeza, RecorrerListaEnlazada, CalcularTotalCostos};
 
 