
s# Bitácora: Listas Enlazadas Simples

## 1. Diagrama de nodos y flechas (Lista completa)

Cada nodo almacena el objeto de atención médica y la dirección de memoria (`siguiente`) del próximo nodo en la cadena:

```text
  Cabeza
    │
    ▼
  Nodo 1 (0x2)                 Nodo 2 (0x4)                 Nodo 3 (0x6)
┌───────────────────┐        ┌───────────────────┐        ┌─────────────────────┐
│   dato1    │ 0x4  │───────►│   dato2    │ 0x6  │───────►│     dato3  │  null  │
└───────────────────┘        └───────────────────┘        └─────────────────────┘
```

---

## 2. Simulación de enlace perdido (`dato1.siguiente = null`)

Al asignar `null` al puntero `.siguiente` del primer nodo, se rompe la cadena:

```text
  Cabeza
    │
    ▼
  Nodo 1 (0x2)                 Nodo 2 (0x4)                 Nodo 3 (0x6)
┌───────────────────┐        ┌───────────────────┐        ┌─────────────────────┐
│    dato    │ null │   X    │   dato2    │ 0x6  │───────►│   dato3    │  null  │
└───────────────────┘        └───────────────────┘        └─────────────────────┘
                                       ▲
                                       │
                        (Nodos huérfanos / inaccesibles)
```

---

## 3. ¿Qué ocurre con el recorrido y por qué?

* **Detención temprana:** Al ejecutar `RecorrerListaEnlazada(cabeza)`, la función únicamente imprime los datos de `dato1` y termina inmediatamente.
* **Condición del ciclo:** Cuando el código evalúa `actual = actual.siguiente`, la variable `actual` pasa a valer `null`. En la siguiente iteración, la condición `while (actual !== null)` resulta falsa y el ciclo se cierra.
* **Pérdida de acceso:** En una lista enlazada simple, cada nodo solo conoce la dirección de memoria del que le sigue. Al borrar la referencia `0x4` en `dato1`, se destruye el único puente hacia `dato2` y `dato3`, dejando ambos nodos huérfanos en memoria.

