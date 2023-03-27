/* author:Rakshita Mathur
Student id: 300215340
Course: csi 3140
Assignment: 4 Question 2 JS*/

// Initialize the game
var emptyRow = 4;
var emptyCol = 4;

// Shuffle the tiles
function shuffle() {
        var nums = [];
        for (var i = 1; i <= 15; i++) {
                nums.push(i);
        }
        nums.sort(function() { return 0.5 - Math.random(); });
        for (var i = 0; i < 15; i++) {
                var row = Math.floor(i / 4);
                var col = i % 4;
                var tile = document.getElementsByTagName("td")[i];
                tile.dataset.row = row;
                tile.dataset.col = col;
                tile.textContent = nums[i];
        }
        emptyRow = 3;
        emptyCol = 3;
}

// Display the board
function display() {
        for (var i = 0; i < 15; i++) {
                var row = Math.floor(i / 4);
                var col = i % 4;
                var tile = document.getElementsByTagName("td")[i];
                if (row == emptyRow && col == emptyCol) {
                        tile.textContent = "";
                }
                else {
                        tile.textContent = (row * 4 + col + 1).toString();
                }
        }
}

// Initialize the board
shuffle();
display();

// Add click event listeners to tiles
var tiles = document.getElementsByTagName("td");
for (var i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener("click", function() {
                var row = parseInt(this.dataset.row);
                var col = parseInt(this.dataset.col);
                if (row == emptyRow && col == emptyCol - 1) {
                        // Move tile to the left
                        this.dataset.col = col - 1;
                        emptyCol = col;
                        display();
                }
                else if (row == emptyRow && col == emptyCol + 1) {
                        // Move tile to the right
                        this.dataset.col = col + 1;
                        emptyCol = col;
                        display();
                }
                else if (row == emptyRow - 1 && col == emptyCol) {
                        // Move tile up
                        this.dataset.row = row - 1;
                        emptyRow = row;
                        display();
                }
                else if (row == emptyRow + 1 && col == emptyCol) {
                        // Move tile down
                        this.dataset.row = row + 1;
                        emptyRow = row;
                        display();
                }
                else {
                        // Illegal move
                        alert("Illegal move!");
                }
                checkGameOver();
        });
}

// Check if the game is over
function checkGameOver() {
        var nums = [];
        for (var i = 0; i < 15; i++) {
                var row = Math.floor(i / 4);
        var col = i % 4;
        var tile = document.getElementsByTagName("td")[i];
        if (row == emptyRow && col == emptyCol) {
                nums.push(0);
        }
        else {
                nums.push(parseInt(tile.textContent));
        }
}
for (var i = 0; i < 15; i++) {
        if (nums[i] != i + 1) {
                // Game is not over yet
                return;
        }
}
// Game is over
var playAgain = confirm("Congratulations! You solved the puzzle! Play again?");
if (playAgain) {
        shuffle();
        display();
}
}
