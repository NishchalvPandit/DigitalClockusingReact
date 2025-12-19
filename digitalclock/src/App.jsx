import Clock from "./clock";
import { useState } from "react";

function App() {
  return (
    <div>
      Digital Clock
      <select>
        <option value={"red"}></option>
      </select>
      <Clock />
    </div>
  );
}

export default App;
