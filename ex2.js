/*
¿Que va a mostrar por el terminal cuando hagamos node ex2.js? ¿Por qué?
*/

let numero = 3;

if (numero < 2) {
  console.log("Bruuuu!");
} else {
  console.log("Cuack!");
  console.log("Pato cuack!!");
}

/**
 * Repuesta: la expresión (numero < 2) se evalúa como 3<2. 3 NO es menor que 2, por lo tanto, dicha expresión se evalúa con el valor boleano false. Como existe una rama alternativa mediante la palabra reservada "else", entonces se ejecuta todas las instrucciones del else {}. Es decir, se ejecuta la línea 10 y seguidamente la 11. Veremos por el terminal "Cuack!" y "Pato cuack!!".
 */
