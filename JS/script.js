import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll(".board-tile");

document.querySelector(".restart").addEventListener("click", () => {
  startNewGame();
});

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
    // console.log('tile.dataset.index:', tile.dataset.index)
  });
});

function onTileClick(i) {
  //make move
  game.makeMove(i)
  // update board
  gameView.updateBoard(game);

  const winnigCombination = game.findWinningCombinations();
  if (winnigCombination) {
    setTimeout(() => {
      alert(
        `Player "${game.board[winnigCombination[0]]}" Won Please Start New Game`
      );
      // window.location.reload();
      startNewGame();
    }, 500);
    return;
  }

  if (!game.board.includes(null)) {
    setTimeout(() => {
      alert(`Game Draw....! Please Start New Game`);
      // window.location.reload();
      startNewGame();
    }, 500);
    return;
  }
}

function startNewGame() {
  game = new Game();
  gameView.updateBoard(game);
}

gameView.updateBoard(game);


let DarkBtn = document.getElementById('btn');
 if (DarkBtn.checked == true) {
   document.body.classList.add("dark");
 }
 DarkBtn.addEventListener("change", function () {
  if (this.checked == true) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
 });
  