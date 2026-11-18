const ListaEnlazada = require('../src/ListaEnlazada');
const Nodo = require('../src/Nodo');
const { dato1, dato2, dato3 } = require('./nodos');

function mostrarDatos(lista) 
{
    console.log("Contenido de la lista:", lista.aArreglo());
    console.log("Tamaño:", lista.obtenerTamanio());
    console.log("Cabeza:",lista.cabeza.dato);
    console.log("Cola:",lista.cola.dato);
    console.log("Está vacía:",lista.estaVacia());

}

const lista = new ListaEnlazada();

lista.agregarAlFinal(dato1.dato);
lista.agregarAlFinal(dato2.dato);
lista.agregarAlFinal(dato3.dato);

mostrarDatos(lista);