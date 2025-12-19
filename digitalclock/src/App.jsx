import Clock from "./clock";
import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  return (
    <div className="app-container">
      Digital Clock
      <select onChange={(e) => setColor(e.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
      </select>
      <Clock color={color} />
    </div>
  );
}

export default App;
