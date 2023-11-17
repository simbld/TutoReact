import { useState } from "react";
import PropTypes from "prop-types";

function ReverseDataFlow() {
  const [isTermAccepted, setIsTermAccepted] = useState(false);
  return (
    <form>
      <CGUCheckBox checked={isTermAccepted} onCheck={setIsTermAccepted} />
      <button disabled={!isTermAccepted} type="submit">
        Envoyer
      </button>
    </form>
  );
}
function CGUCheckBox({ checked, onCheck }) {
  return (
    <div>
      <label htmlFor="a">
        <input
          type="checkbox"
          onChange={(e) => onCheck(e.target.checked)}
          checked={checked}
        />
        Accepter les conditions d'utilisations
      </label>
    </div>
  );
}

CGUCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default ReverseDataFlow;
