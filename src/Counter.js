import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Click to Check Counter</h2>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Count - {counter}
      </button>
    </div>
  );
};
