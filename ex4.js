/**
 * 1. Ejecuta node ex4.js y comprueba cuantos mensajes se muestra por pantalla
 * 2. Asigna un valor adecuado a la variable "número" para que, por consola, se muestra tan solo "BUP!BUP!"
 */

let numero = 0; /** Solamente puedes modificar esta línea */

if (numero <= 0) {
  console.log("BUP!BUP!");
}

if (numero <= -1) {
  console.log("CROAK!!");
}

/**
 * Respuesta: El valor buscado es el 0. (0<=0) se evalúa como true, puesto que 0 es menor o igual a 0. Por otro lado (0<=-1) se evalúa como false, puesto que 0 NO es menor o igual a -1
 */
