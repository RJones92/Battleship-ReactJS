import React from "react";
import Gameboard from "./Gameboard";

function App() {
  return (
    <div>
      <h1>Battleships!</h1>
      <p>Click below to start playing</p>
      <p>
        Red = hit
        <br />
        Blue = miss
      </p>
      <Gameboard />
    </div>
  );
}

export default App;
