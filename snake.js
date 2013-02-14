var makeSnake = function() {
  return {
    body: ['*'],
    direction: "south",

    eatApple: function() {
      for (var i = 0; i < 4; i++) {
        this.body.push('*');
      };
    },

    turn: function(dir) {
      this.direction = dir;
    }
  };
};

var makeBoard = function() {
  var board = [];
  for (var i = 0; i < 30; i++) {
    board[i] = [];
    for (var j = 0; j < 30; j++) {
      board[i].push('.');
    }
  }
  return board;
};

var makeGame = function() {
  return {
    snake: makeSnake(),
    board: makeBoard(),
    snakePos: null,

    // could create random starting position
    setSnake: function() {
      this.board[0][0] = this.snake.body[0];
      this.snakePos = [0, 0]
    },

    step: function() {
      // move snake one position further
      // check if there is a collide
      switch(this.snake.direction) {
        case "north":
          this.board[this.snakePos[0]][this.snakePos[1]] = '.'
          snakePos = [this.snakePos[0] - 1][this.snakePos[1]]
          this.board[this.snakePos[0]][this.snakePos[1]] = '*'
          break;
        case "south":
          this.board[this.snakePos[0]][this.snakePos[1]] = '.'
          snakePos = [this.snakePos[0] + 1][this.snakePos[1]]
          this.board[this.snakePos[0]][this.snakePos[1]] = '*'
          break;
        case "east":
          snakePos = [this.snakePos[0]][this.snakePos[1] + 1]
          this.board[snakePos[0]][snakePos[1]] = this.snake.body.pop
          break;
        case "west":
          snakePos = [this.snakePos[0]][this.snakePos[1] - 1]
          this.board[snakePos[0]][snakePos[1]] = this.snake.body.pop
          break;
      };
    }
  };
};
module.exports = {
  makeGame: makeGame,
  makeBoard: makeBoard,
  makeSnake: makeSnake
};
