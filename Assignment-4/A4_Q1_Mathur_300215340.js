/* author:Rakshita Mathur
Student id: 300215340
Course: csi 3140
Assignment: 4 Question 1 JS*/

const NUM_TILES = 15;
const BOARD_SIZE = 4;
const EMPTY_TILE = BOARD_SIZE * BOARD_SIZE - 1;
const TILE_SIZE = 50;

let tiles;
let emptyPos;

function createBoard() {
  const board = document.getElementById("board");
  for (let i = 0; i < BOARD_SIZE; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < BOARD_SIZE; j++) {
      const cell = document.createElement("td");
      cell.id = i * BOARD_SIZE + j;
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

function shuffleTiles() {
  tiles = Array.from({length: NUM_TILES}, (_, i) => i + 1);
  tiles.push(EMPTY_TILE);

  do {
    for (let i = 0; i < NUM_TILES; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
  } while (!isSolvable(tiles));

  emptyPos = tiles.indexOf(EMPTY_TILE);
}

function drawTiles() {
  const board = document.getElementById("board");
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      const cell = board.rows[i].cells[j];
      const tile = tiles[i * BOARD_SIZE + j];
      cell.textContent = tile === EMPTY_TILE ? "" : tile;
      cell.className = tile === EMPTY_TILE ? "empty" : "";
      cell.style.backgroundColor = "";
      cell.style.color = "";
      cell.style.cursor = "pointer";
      cell.style.width = TILE_SIZE + "px";
      cell.style.height = TILE_SIZE + "px";
      cell.addEventListener("click", moveTile);
    }
  }
}

function moveTile(event) {
  const srcCell = event.target;
  const srcPos = Number(srcCell.id);
  const destPos = emptyPos;

  if (isAdjacent(srcPos, destPos)) {
    [tiles[srcPos], tiles[destPos]] = [tiles[destPos], tiles[srcPos]];
    emptyPos = srcPos;
    drawTiles();
    if (isSolved()) {
      alert("Congratulations, you won!");
    }
  } else {
    alert("Illegal move!");
  }
}

function isAdjacent(srcPos, destPos) {
  const srcRow = Math.floor(srcPos / BOARD_SIZE);
  const srcCol = srcPos % BOARD_SIZE
  const destRow = Math.floor(destPos / BOARD_SIZE);
	const destCol = destPos % BOARD_SIZE;
	const rowDiff = Math.abs(srcRow - destRow);
	const colDiff = Math.abs(srcCol - destCol);
	return rowDiff + colDiff === 1;
	}

	function isSolved() {
	for (let i = 0; i < NUM_TILES; i++) {
	if (tiles[i] !== i + 1) {
	return false;
	}
	}
	return true;
	}

	function isSolvable(tiles) {
	let inversions = 0;
	for (let i = 0; i < NUM_TILES; i++) {
	for (let j = i + 1; j < NUM_TILES; j++) {
	if (tiles[i] > tiles[j]) {
	inversions++;
	}
	}
	}
	const emptyRow = Math.floor(emptyPos / BOARD_SIZE) + 1;
	const isEven = emptyRow % 2 === 0;
	return isEven ? inversions % 2 === 1 : inversions % 2 === 0;
	}

	createBoard();
	shuffleTiles();
	drawTiles();