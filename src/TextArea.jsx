import { useState } from "react";

function TextArea() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const [checked, setChecked] = useState(true);
  const toggleCheck = () => {
    setChecked(!checked);
  };
  return (
    <form>
      <textarea value={value} onChange={handleChange} cols="30" rows="10" />
      <input type="checkbox" checked={checked} onChange={toggleCheck} />
      <button type="submit" disabled={!checked}>
        Envoyer
      </button>
    </form>
  );
}

export default TextArea;
