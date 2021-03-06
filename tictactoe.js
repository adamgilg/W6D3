var ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],

  placeMark: function(x, y, mark) {
    this.board[x][y] = mark;
  },

  onBoard: function(x, y) {
    if (x > 2 || y > 2) {
      return false;
    }
    else if (x < 0 || y < 0) {
      return false;
    }
    else {
      return true
    };
  },

  checkMark: function(x, y) {
    if (this.board[x][y] == null) {
      return true;
    }
    else {
      return false;
    };
  },

  makeMove: function(x, y, mark) {
    if (this.onBoard(x,y) === true && this.checkMark(x,y) === true) {
      this.placeMark(x,y, mark);
      return true;
    }
    else {
      return false;
    };
  },

  win: function(mark) {
    if (this.winRow(mark) == true
      || this.winCol(mark) == true || this.winDia(mark) == true ) {
      return true;
    }
    else {
      return false;
    };
  },

  winRow: function(mark) {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == mark &&
        this.board[i][1] == mark && this.board[i][2] == mark) {
        return true;
      } else {
        return false;
      };
    };
  },

  winCol: function(mark) {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == mark &&
        this.board[1][i] == mark && this.board[2][i] == mark) {
        return true;
      } else {
        return false;
      };
    };
  },

  winDia: function(mark) {
    if (this.board[0][0] == mark &&
        this.board[1][1] == mark &&
        this.board[2][2] == mark) {
      return true;
    }
    else if (this.board[0][2] == mark &&
              this.board[1][1] == mark &&
              this.board[2][0] == mark) {
      return true;
    }
    else {
      return false;
    };
  }

};

var renderBoard = function(game) {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      $('#r' + i + 'c' + j).html(game.board[i][j]);
    };
  };
};


var playTTT = function() {



  var game = ticTacToe;


  var turn = 'x';

  while (true) {
    renderBoard(game);
    var move = prompt(turn +"'s turn! Where to move? (r, c)");
    move = move.split(", ");
    var row = move[0];
    var col = move[1];

    if (game.makeMove(row, col, turn) == true) {
      if (game.win(turn) == true) {
        $('.winner').html(turn + " wins");
        renderBoard(game);

        break;
      }
      else {
        turn = (turn == 'x') ? 'o' : 'x';
      };
    } else {
      alert("invalid move!");
    };
  };

};



// module.exports = {
//   ticTacToe: ticTacToe
// }