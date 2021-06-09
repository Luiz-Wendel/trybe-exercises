/* 
  Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
  Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
  Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

  Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

  Um ângulo será considerado inválido se não tiver um valor positivo.
*/

var angulo1 = 0;
var angulo2 = 60;
var angulo3 = 60;

typeof angulo1 !== "number" ||
typeof angulo2 !== "number" ||
typeof angulo3 !== "number"
  ? console.log("Angulos devem ser numeros")
  : angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0
  ? console.log("Algum angulo esta invalido")
  : angulo1 + angulo2 + angulo3 === 180
  ? console.log(true)
  : console.log(false);
