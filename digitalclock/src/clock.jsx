import { useEffect, useState } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(0);


  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="clock-display" style={{ color: color }}>
      <h1>{time}</h1>
    </div>
  );
}
export default Clock;
