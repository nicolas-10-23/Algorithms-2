const Nodo = require('./Nodo');

 class ListaEnlazada 
{
    constructor() 
    {
        this.cabeza = null;
        this.cola = null;
        this.tamanio = 0;
    }
    
    agregarAlFinal(dato) 
    {
        const nuevoNodo = new Nodo(dato);

        if (this.cabeza === null) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            this.cola = nuevoNodo;
        }

        this.tamanio++;

        console.log("Tamaño de la lista: ", this.tamanio);
    }
   
    agregarAlInicio(dato) 
    {
        const nuevoNodo = new Nodo(dato);

        if (this.cabeza === null) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            nuevoNodo.siguiente = this.cabeza;
            this.cabeza = nuevoNodo;
        }

        this.tamanio++;
    }
     
    recorrer(callback) 
    {
        let actual = this.cabeza;

        while (actual !== null) {
            callback(actual.dato);
            actual = actual.siguiente;
        }
    }


     aArreglo()
    {
        const arreglo = [];
        let actual = this.cabeza;

        while (actual !== null) {
            arreglo.push(actual.dato);
            actual = actual.siguiente;
        }

        return arreglo;
    }

    estaVacia()
    { 
       if (this.tamanio === 0) {
        console.log("La lista está vacía.");
        return this.tamanio === 0;
       } 
       else {
        console.log("La lista no está vacía, tiene ", this.tamanio, " elementos.");
        return false;
       }
    }

    obtenerTamanio()
    {
        return this.tamanio;
    }

}

module.exports = ListaEnlazada;