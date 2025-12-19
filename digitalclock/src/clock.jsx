import { useEffect, useState, useSyncExternalStore } from "react";

function Clock() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}
export default Clock;
