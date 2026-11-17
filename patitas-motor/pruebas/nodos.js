import Nodo from '../src/Nodo.js';

const  atencion1 = new Nodo(
    {
        fecha : "02/02" ,
        motivo: "vacunacion",
        veterinario: "Dra.Rios",
        costo : 85000,
    }
)
  const atencion2 = new Nodo(
    {
        fecha : "15/03" ,
        motivo: "control de peso",
        veterinario: "Dr.Gomez",
        costo : 40000,
    }
  )
   const atencion3 = new Nodo(
    {
        fecha : "20/05" ,
        motivo: "limpieza dental",
        veterinario: "Dra.Rios",
        costo : 150000,
    }
   )
    atencion1.siguiente = atencion2
    atencion2.siguiente = atencion3
    
    
let cabeza = atencion1

function RecorrerListaEnlazada(actual) {
    
    while (actual !== null) {

        console.log(actual.atencion); 
        actual = actual.siguiente;
    }
}

function CalcularTotalCostos(actual) 
{
    let total = 0;
    while (actual !== null) 
        {
            total += actual.atencion.costo;
            actual = actual.siguiente;
        }
    console.log("Total de costos = ", total);
}
    

CalcularTotalCostos(cabeza);
RecorrerListaEnlazada(cabeza);

 

  /*  AgregarAlInicio(atencion)
    {
        const nuevo = new Nodo(atencion);
        nuevo.siguiente = this.cabeza;
        this.cabeza = nuevo
    }
    console.log(atencion)
*/