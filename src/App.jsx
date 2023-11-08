const strongTitle = "<strong>Bonjour Strong avec dangerouslySetInnerHTML</strong>";
const classTitle = "Bonjour className avec les attributs";
const styleTitle = "Bonjour avec style, en JSX c'est forcement un objet a l'intérieur";
const h1Title = "Bonjour h1";
const normalTitle = "Bonjour normal";
const variableStyleTitle = "Bonjour avec la variable 'styleVariable'";
const styleVariable = { color: "brown", backgroundColor: "grey" };
const clickMeText = "click me !";
const clickMe = "clique moi !"
const showTitle = true
const TitleStyle = {color: "brown", fontSize: "5rem"}

function App() {
  const handleClick = (e) => {
    e.preventDefault(); //Empêche toujours le comportement par défaut, dans ce cas présent c'est la nivigation du lien <a href>
    e.stopPropagation();
    alert("j'ai cliqué sur le titre")
  }

  return (
    <>
    <input type="text" />
      <p>{showTitle && <h7 className="Title" style={TitleStyle}>Title</h7>}</p>
      {showTitle ? <h7 className="Title" style={TitleStyle}>Title</h7> : <p>Titre caché</p>}
      <h5 className="title5">{normalTitle}</h5>
      <h1 className="title4">{h1Title}</h1>
      <h2 className="title" dangerouslySetInnerHTML={{ __html: strongTitle }}></h2>
      <h3 className="title2">{classTitle}</h3>
      <h4 className="title3" style={{ color: "red", backgroundColor: "purple" }}>{styleTitle}</h4>
      <h6 className="title6" style={styleVariable}>{variableStyleTitle}</h6>
      <a href="/some-path" onClick={handleClick} className="clickMe" style={{ fontSize: "2rem" }}>{clickMeText}</a>
      <a href="/some-path" onClick={handleClick} className="clickMe" style={{ fontSize: "2rem" }}>{clickMe}</a>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, voluptatibus consequatur corporis ipsam porro facere cum placeat quod autem optio inventore dolore nulla beatae laudantium quidem officiis. Corporis, numquam?</p> 
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, voluptatibus consequatur corporis ipsam porro facere cum placeat quod autem optio inventore dolore nulla beatae laudantium quidem officiis. Corporis, numquam?</p> 
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam, voluptatibus consequatur corporis ipsam porro facere cum placeat quod autem optio inventore dolore nulla beatae laudantium quidem officiis. Corporis, numquam?</p> 
  </>
  );
}

function ChildComponent() {
  const handleClick = (event) => {
    event.stopPropagation();
    alert('Le bouton a été cliqué');
  };

  return <button onClick={handleClick}>{clickMe}</button>;
}

function ParentComponent() {
  const handleClick = () => {
    alert('Le composant parent a été cliqué');
  };

  return (
    <div onClick={handleClick}>
      <ChildComponent />
    </div>
  );
}

export default App; ParentComponent;
