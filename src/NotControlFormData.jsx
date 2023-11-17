/* eslint-disable no-console */
function NotControlFormData() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target));
  };

  console.log("render");

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" defaultValue="champ prérempli" />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default NotControlFormData;
