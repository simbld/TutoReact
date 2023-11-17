/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import { useState } from "react";

function FormControlled() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  console.log("render");
  return (
    <form>
      {/* pour un champ contrôlé, il faut value et onChange, et si il y a value alors il faut qu'il y est une chaîne de caractère vide useState(' ') */}
      <input type="text" value={value} onChange={handleChange} />
      {value}
      <button type="reset" onClick={reset}>
        Reset
      </button>
    </form>
  );
}

export default FormControlled;
