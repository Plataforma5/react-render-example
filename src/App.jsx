import * as React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(10);
  const [intervalID, setIntervalID] = React.useState(null);

  console.log("RENDER", count);

  const startInterval = () => {
    const id = setInterval(() => {
      console.log("COUNT", count);
      setCount(count + 1);
    }, 1000);
    setIntervalID(id);
  };

  const stopInterval = () => {
    stopInterval(intervalID);
  };

  return (
    <>
      <div>
        <img
          src={viteLogo}
          onClick={startInterval}
          className="logo"
          alt="Vite logo"
        />
        <img
          src={reactLogo}
          onClick={stopInterval}
          className="logo react"
          alt="React logo"
        />
      </div>

      <h1>{count}</h1>
    </>
  );
}

export default App;
