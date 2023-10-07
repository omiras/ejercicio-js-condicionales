/*
1. Comprueba que no se muestra nada por el terminal con "node ex3.js"
2. Asigna un valor a la variable "numero" para que se muestren por el terminal TODOS los console.log del código. Actualmente, estamos asignando un 0.
3. BONUS: ¿Cual es el valón mínimo entero que resuelve este ejercicio?
*/

let numero = 501; /** SOLAMENTE PUEDES MODIFICAR ESTA LÍNEA */

if (numero > 0) {
  console.log("El número es mayor de 0.");
}

if (numero > 100) {
  console.log("El número es mayor de 100.");
}

if (numero > 500) {
  console.log("El número es mayor de 500.");
}

/**
 * Respuesta: Si queremos que se muestren todos los mensajes por el terminal, debemos asignar un número mayor de 500 a la variable 'numero'. Por ejemplo , 501. 501 es mayor que 0, mayor que 100, y mayor que 500, lo que permite ejecutar todos los console.log de este código.
 */
