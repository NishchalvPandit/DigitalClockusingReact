import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date()); // store current time
  const [color, setColor] = useState("#000000"); // default clock color

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: color, fontSize: "60px", fontFamily: "monospace" }}>
        {formatTime(time)}
      </h1>

      {/* Color Picker */}
      <div style={{ marginTop: "20px" }}>
        <label>Choose Clock Color: </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DigitalClock;
