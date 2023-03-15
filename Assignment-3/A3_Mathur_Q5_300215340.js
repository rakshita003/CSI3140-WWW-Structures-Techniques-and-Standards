/*author:Rakshita Mathur
Student ID:300215340
Date: 2023-03-06
Couse: CSI3140
Description: Assignment 3 Question 5-JavaScript
*/

const RACE_LENGTH = 70;
let tortoisePosition = 0;
let harePosition = 0;
let tickCount = 0;
let raceStarted = false;

function moveTortoise() {
  const randNum = Math.floor(Math.random() * 10) + 1;
  if (randNum <= 5) {
    tortoisePosition += 3;
  } else if (randNum <= 7) {
    tortoisePosition -= 6;
  } else {
    tortoisePosition += 1;
  }
  if (tortoisePosition < 0) {
    tortoisePosition = 0;
  }
}

function moveHare() {
  const randNum = Math.floor(Math.random() * 10) + 1;
  if (randNum <= 2) {
    harePosition += 9;
  } else if (randNum <= 4) {
    harePosition -= 12;
  } else if (randNum <= 5) {
    harePosition += 1;
  } else if (randNum <= 7) {
    harePosition -= 2;
  }
  if (harePosition < 0) {
    harePosition = 0;
  }
}

function checkFinishLine() {
  if (tortoisePosition >= RACE_LENGTH && harePosition >= RACE_LENGTH) {
    alert("IT'S A TIE.");
    raceStarted = false;
  } else if (tortoisePosition >= RACE_LENGTH) {
    alert("TORTOISE WINS!!! YAY!!!");
    raceStarted = false;
  } else if (harePosition >= RACE_LENGTH) {
    alert("HARE WINS. YUCK!");
    raceStarted = false;
  }
}

function printRaceStatus() {
  const raceTrack = document.getElementById("race-track");
  raceTrack.innerHTML = "";

  // Create and add the tortoise element to the race track
  const tortoise = document.createElement("div");
  tortoise.setAttribute("id", "tortoise");
  tortoise.style.left = `${tortoisePosition}px`;
  raceTrack.appendChild(tortoise);

  // Create and add the hare element to the race track
  const hare = document.createElement("div");
  hare.setAttribute("id", "hare");
  hare.style.left = `${harePosition}px`;
  raceTrack.appendChild(hare);

  // Create and add the finish line element to the race track
  const finishLine = document.createElement("div");
  finishLine.setAttribute("id", "finish-line");
  finishLine.style.left = `${RACE_LENGTH}px`;
  raceTrack.appendChild(finishLine);
}

function startRace() {
  if (raceStarted) {
    return;
  }

  raceStarted = true;

  const raceInterval = setInterval(() => {
    moveTortoise();
    moveHare();
    printRaceStatus();
    checkFinishLine();

    tickCount++;

    if (!raceStarted) {
      clearInterval(raceInterval);
    }
  }, 50);
}

function resetRace() {
  raceStarted = false;
  tickCount = 0;
  tortoisePosition = 0;
  harePosition = 0;
  printRaceStatus();
}

// Initialize race track on page load
document.addEventListener("DOMContentLoaded", () => {
  printRaceStatus();

  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", startRace);

  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", resetRace);
});
