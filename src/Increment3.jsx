import { useState } from "react";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";

function IncrementApp() {
    const [count, setCount] = useState(0)
    console.log(render);
    const increment = () => {
        setCount((count) => count + 1) // en remplacant (count +1  par une fonction (count) => count + 1 on peut les additionner)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
    }

    return <>
    <p>Compteur : {count}</p>
    <button onClick={increment}>Incrémenter</button>
    </>
}

export default IncrementApp;