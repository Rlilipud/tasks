import React from "react";

export default function CountNumber({ setCounter, counter }) {
  function handlerMinus() {
    setCounter(counter - 1);
  }
  function handlerAdd() {
    setCounter(counter + 1);
  }

  return (
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
  );
}
