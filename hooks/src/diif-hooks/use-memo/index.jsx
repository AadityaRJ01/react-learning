import { useState, useMemo } from "react";

export function MemoExample() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const square = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return (
    <>
      <h2>Square: {square}</h2>

      <button onClick={() => setCount(count + 1)}>
        Re-render
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>
    </>
  );
}