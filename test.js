// var towersOfHanoi = require('./towersofhanoi.js');

// var game = towersOfHanoi.towersGame;

// console.log(game.towers);
// console.log("Expect towers to move: from 1 to 2");
// game.move(0,1);
// console.log(game.towers);
// console.log("Expect invalid move: from 1 to 2");
// game.move(0,1);
// console.log(game.towers);
// console.log("Expect invalid(empty from): from 3 to 2");
// game.move(2,1);
// console.log(game.towers);
// console.log("Expect invalid(not in range): from 4 to 2");
// game.move(3,1);
// console.log(game.towers);
// console.log(game.win());
// game.towers = [[], [3, 2, 1], []];
// console.log(game.towers);
// console.log(game.win());

var ttt = require('./tictactoe.js');

var game = ttt.ticTacToe;

console.log("it has a board");
console.log(game.board);

console.log("it lets you place a mark");
game.makeMove(0,1, 'x');
console.log(game.board);

console.log("it won't let you place on a taken space");
game.makeMove(0,1, 'y');
console.log(game.board);

console.log("it let you win horizontally");
game.makeMove(0,2, 'x');
game.makeMove(0,0, 'x');
console.log(game.board);
console.log(game.winRow('x'));

console.log("it lets you win vertically");
game.board = [['x', null, null], ['x', null, null], ['x', null, null]];
console.log(game.board);
console.log(game.winCol('x'));

console.log("it lets you win diagonally");
game.board = [['x', null, null], [null, 'x', null], [null, null, 'x']];
console.log(game.board);
console.log(game.winDia('x'));