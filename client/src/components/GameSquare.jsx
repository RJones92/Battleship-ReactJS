import React, { useState } from "react";

function GameSquare(props) {
  //convert position coordinates into pixels
  const topPos = props.topPos + "px";
  const leftPos = props.leftPos + "px";
  const [status, setStatus] = useState(props.initialStatus);

  // This is what happens when the user clicks on a square to 'fire a torpedo' at a battleship
  function hitSquare() {
    //0 = empty, 1 = unsunken part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
    switch (status) {
      case 0:
        setStatus(3);
        break;
      case 1:
        setStatus(2);
        props.increaseHitCount();
        break;
      default:
      //do nothing
    }
  }

  return (
    <div
      className="game-square"
      style={{ top: topPos, left: leftPos }}
      onClick={hitSquare}
    >
      <p>{status}</p>
    </div>
  );
}

export default GameSquare;
