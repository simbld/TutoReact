/* eslint-disable no-console */
import { useState } from "react";

function IncrementApp() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1); // en remplaçant (count +1  par une fonction (count) => count + 1 on peut les additionner)
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <>
      <p>Compteur :{count}</p>
      <button type="submit" onClick={increment}>
        Incrémenter
      </button>
    </>
  );
}

export default IncrementApp;
