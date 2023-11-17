/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function FirstName() {
  const [firstname, setFirstname] = useState("John Doe");
  return (
    <form>
      <input type="text" name="firstname" defaultValue="nom par défaut" />
      {setFirstname}
    </form>
  );
}
export default FirstName;
