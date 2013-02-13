var towersGame = {
  towers: [[3, 2, 1], [], []],

  makeMove: function(fromStack, toStack) {
    this.towers[toStack].push(this.towers[fromStack].pop());
  },

  checkMove: function(fromStack, toStack) {
    if (fromStack > 2 || toStack > 2) {
      return false;
    }
    else if (this.towers[fromStack].length == 0) {
      return false;
    }
    else if (this.towers[fromStack][this.towers[fromStack].length - 1] > this.towers[toStack][this.towers[toStack].length - 1]) {
      return false;
    }
    else {
      return true;
    };
  },

  move: function(fromStack, toStack) {
    if (this.checkMove(fromStack, toStack) == true) {
      this.makeMove(fromStack, toStack);
    }
    else {
      console.log("Sorry, invalid move...");
    };
  },

  win: function() {
    if (this.towers[1].length == 3 || this.towers[2].length == 3) {
      console.log("winner!")
      return true;
    }
    else {
      return false;
    };
  }
}

var playGame = function() {
  var game = towersGame;
  while (game.win() === false) {
    console.log(game.towers);
    // get input from user as from, to
    move(from, to);
  }
};

module.exports = {
  towersGame: towersGame
}