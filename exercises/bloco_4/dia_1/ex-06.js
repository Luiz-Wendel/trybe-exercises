/* 
  Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

  Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas
  quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

  Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

  Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

  Exemplo: bishop -> diagonals
*/

var piece = "pawn";

piece = piece.toLowerCase();

/*
  Chess pieces moves taken from: https://www.ichess.net/blog/chess-pieces-moves/
*/
switch (piece) {
  case "king":
    console.log(
      `one square in any direction, so long as that square is not attacked by an enemy piece.`
    );
    break;
  case "queen":
    console.log(
      `diagonally, horizontally, or vertically any number of squares.`
    );
    break;
  case "rook":
    console.log(
      `horizontally or vertically any number of squares.`
    );
    break;
  case "bishop":
    console.log(
      `diagonally any number of squares.`
    );
    break;
  case "knight":
    console.log(
      `in an ‘L’ shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.`
    );
    break;
  case "pawn":
    console.log(
      `vertically forward one square, with the option to move two squares if they have not yet moved.`
    );
    break;
  default:
    console.log(`That's not a valid chess piece`);
}
