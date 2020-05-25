import React, { useState } from "react";

function GameSquare(props) {
  //convert position coordinates into pixels
  const topPos = props.topPos + "px";
  const leftPos = props.leftPos + "px";
  //Each GameSquare is responsible for managing it's own status!
  // squareStatus tracks the squares 'hit status', and also the color of the square - which signifies a hit or a miss
  const [squareStatus, setSquareStatus] = useState({
    shipState: props.shipState,
    classes: "game-square",
  });

  // This is what happens when the user clicks on a square to 'fire a torpedo' at a battleship
  function hitSquare() {
    //0 = empty, 1 = unsunken part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
    switch (props.shipState) {
      case 0:
        setSquareStatus({
          shipState: 3,
          classes: "game-square missed-game-square",
        });
        break;
      case 1:
        setSquareStatus({
          shipState: 2,
          classes: "game-square hit-game-square",
        });
        props.increaseHitCount();
        break;
      default:
      //do nothing
    }
  }

  return (
    <div
      className={squareStatus.classes}
      style={{ top: topPos, left: leftPos }}
      onClick={hitSquare}
    >
      <p>{squareStatus.shipState}</p>
    </div>
  );
}

export default GameSquare;
