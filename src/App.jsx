import { useState } from "react";
import CountNumber from "./components/CountNumber";

function App() {
  let [input, setInput] = useState(0);

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
        <p style={{ padding: "0 24px" }}>{input}</p>

        <CountNumber setInput={setInput} input={input} />
      </div>
    </div>
  );
}

export default App;
