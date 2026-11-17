
Diagrama en la bitácora (Lista original vs Enlace perdido)

 
 Lista enlazada completa

    Cabeza
      | 
      |
     Nodo1 (2x)                   Nodo2 (4x)                  Nodo3 (6x)  
   [ atencion1  | 4x ] ----> [ atencion2  | 6x ] ----> [ atencion3  | null ]   


 Con el enlace perdido (atencion1.siguiente = null)

    Cabeza
      | 
      |
     Nodo1 (2x)                        Nodo2 (4x)                  Nodo3 (6x)  
   [ atencion1  | null ]           [ atencion2  | 6x ] ----> [ atencion3  | null ]   
                                           |
                                           |
                                        (Nodos huérfanos / inaccesibles desde cabeza)
 

¿Qué ocurre con el recorrido y por qué?

Si se cambia atencion1.siguiente(cabeza) = null y se ejecuta RecorrerListaEnlazada(cabeza), pasa lo siguiente:

1.Solo imprime el primer nodo: En la consola únicamente se verá los datos de atencion1.

2.El ciclo while termina antes de tiempo, ya que el actual ya no es diferente de null.  

3.Se pierde el acceso al resto de la lista como se muestra en el segundo diagrama, cada nodo solo conoce la dirección del que sigue; al borrar la referencia en atencion1, se rompió el único puente hacia atencion2.
