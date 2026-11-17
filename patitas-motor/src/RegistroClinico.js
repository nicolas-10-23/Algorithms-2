const atencion1 = 
    {
        fecha : "02/02" ,
        motivo: "vacunacion",
        veterinario: "Dra.Rios",
        costo : 85000,
    }
    
  const atencion2 =   
    {
        fecha : "15/03" ,
        motivo: "control de peso",
        veterinario: "Dr.Gomez",
        costo : 40000,
    }

   const atencion3 =  
    {
        fecha : "20/05" ,
        motivo: "limpieza dental",
        veterinario: "Dra.Rios",
        costo : 150000,
    }

    atencion1.siguiente = atencion2
    atencion2.siguiente = atencion3
    atencion3.siguiente = null

    let actual = atencion1 
    let cabeza = atencion1

    while (actual !== null)
        {
            console.log(atencion1)
            actual=actual.siguiente

        }


  /*  AgregarAlInicio(atencion)
    {
        const nuevo = new Nodo(atencion);
        nuevo.siguiente = this.cabeza;
        this.cabeza = nuevo
    }
    console.log(atencion)
*/