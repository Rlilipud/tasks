import { useState } from "react";
import CountNumber from "./components/CountNumber";

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ padding: "0 24px" }}>{counter}</p>

        <CountNumber setCounter={setCounter} counter={counter} />
      </div>
    </div>
  );
}

export default App;
