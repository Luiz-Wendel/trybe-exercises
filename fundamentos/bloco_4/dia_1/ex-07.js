/*
  Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
  Siga essas regras:
    Porcentagem >= 90 -> A
    Porcentagem >= 80 -> B
    Porcentagem >= 70 -> C
    Porcentagem >= 60 -> D
    Porcentagem >= 50 -> E
    Porcentagem < 50 -> F
  O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

var nota = 90;

nota > 100 || nota < 0
  ? console.log("Erro: valor da nota invalido")
  : nota >= 90
  ? console.log("A")
  : nota >= 80
  ? console.log("B")
  : nota >= 70
  ? console.log("C")
  : nota >= 60
  ? console.log("D")
  : nota >= 50
  ? console.log("E")
  : console.log("F");
