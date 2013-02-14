var snakegame = require('./snake.js');

var board = snakegame.makeBoard();
var snake = snakegame.makeSnake();
var game = snakegame.makeGame();

// console.log("Snake Tests:");
// console.log("Initial length:");
// console.log(snake.body);
// console.log("Length after eating apple");
// snake.eatApple();
// console.log(snake.body);
// console.log("Length after eating second apple");
// snake.eatApple();
// console.log(snake.body);
// console.log("Initial Direction:");
// console.log(snake.direction);
// console.log("After turning east");
// snake.turn("east");
// console.log(snake.direction);

console.log("snake lives on board")
game.setSnake()
// console.log(game.board)

console.log("snake moves south")
game.step()
console.log(game.board)