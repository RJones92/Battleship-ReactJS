import React, { useState } from "react";
import GameSquare from "./GameSquare";

function Gameboard(props) {
  let hitCount = 0;

  // ------------------ Board set up ------------------
  const rows = 10;
  const cols = 10;
  // squareSize should match the width and height of the 'game-square' class in the stylesheet
  const squareSize = 50;
  // squareCoords holds the coordinates of each square
  const squareCoords = [];

  // Track the status of each square in the gameboard in a 2d array
  //0 = empty, 1 = unsunk part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
  // According to Hasbro the ships should be:
  // Carrier - 5 squares
  // Battleship  - 4 squares
  // Destroyer - 3 squares
  // Submarine - 3 squares
  // Patrol boat - 2 squares
  const initialShipStatus = [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  // Make the gameboard
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      // Set the coordinates of each grid square
      var topPosition = i * squareSize;
      var leftPosition = j * squareSize;
      // Push the coordinates into an array
      squareCoords.push({
        // create a unique identifier using the squares positioning
        id: `${topPosition}${leftPosition}`,
        squareTopPos: topPosition,
        squareLeftPos: leftPosition,
        shipState: initialShipStatus[i][j],
      });
    }
  }

  // ------------------ End of board set up ------------------

  function increaseHitCount() {
    hitCount += 1;
    if (hitCount === 17) {
      alert("Congratulations! You sunk all the battleships!");
    }
  }

  return (
    <div id="gameboard">
      {squareCoords.map((square) => {
        return (
          <GameSquare
            key={square.id}
            id={square.id}
            topPos={square.squareTopPos}
            leftPos={square.squareLeftPos}
            initialStatus={square.shipState}
            increaseHitCount={increaseHitCount}
          />
        );
      })}
    </div>
  );
}

export default Gameboard;
