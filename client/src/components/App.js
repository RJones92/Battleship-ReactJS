import React from "react";
import Gameboard from "./Gameboard";

function App() {
  let hasWon = false;

  return (
    <div>
      <h1>Battleships!</h1>
      <p>Click below to start playing</p>
      <Gameboard />
    </div>
  );
}

export default App;
