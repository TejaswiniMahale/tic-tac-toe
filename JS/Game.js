export default class Game {
  constructor() {
    this.turn = "X";
    this.board = new Array(9).fill(null);
    // console.log("this.board:", this.board);
  }

  nextTurn() {
    if (this.turn == "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
  }

  makeMove(i) {

    if (this.endOfGame()) {
      return;
    }

    if (this.board[i]) {
      return;
    }

   
    this.board[i] = this.turn;

    // console.log("this.board:", this.board);
    
    let winnigCombination = this.findWinningCombinations();

    if (!winnigCombination) {
      this.nextTurn();
    }
    
  }

  findWinningCombinations() {
    const WinningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of WinningCombinations) {
      const [a, b, c] = combination;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return combination;
      }
    }
    return null;
  }

  endOfGame() {
    let winnigCombination = this.findWinningCombinations();
    if (winnigCombination) {
      return true;
    } else {
      return false;
    }
  }
}
