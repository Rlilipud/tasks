import React, { useEffect, useState } from "react";

export default function CountNumber({ setInput, input }) {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    setTimer(0);

    if (intervalId) clearInterval(intervalId);

    if (input > 0) {
      const newIntervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + input);
      }, 1000);

      setIntervalId(newIntervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [input]);

  function handlerMinus() {
    if (input > 0) {
      setInput(input - 1);
    }
  }

  function handlerAdd() {
    setInput(input + 1);
  }

  const setInputToValue = (value) => {
    setInput(value);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          style={{ padding: "0 18px", margin: "0 8px" }}
          onClick={handlerAdd}
        >
          +
        </button>
        <button
          style={{ padding: "0 18px", margin: "0 8px" }}
          onClick={handlerMinus}
        >
          -
        </button>
      </div>
      <p>Timer: {timer}</p>
      <div>
        <button
          style={{ padding: "0 18px", margin: "0 8px" }}
          onClick={() => setInputToValue(5)}
        >
          5
        </button>
        <button
          style={{ padding: "0 18px", margin: "0 8px" }}
          onClick={() => setInputToValue(10)}
        >
          10
        </button>
        <button
          style={{ padding: "0 18px", margin: "0 8px" }}
          onClick={() => setInputToValue(100)}
        >
          100
        </button>
      </div>
    </>
  );
}
