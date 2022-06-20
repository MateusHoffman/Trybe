import './App.css';

function Heading() {
  return <strong>Se liga, nessa história</strong>
}
function App() {

  const teste = () => {
    return <strong>Salve rapaziada</strong>
  }

  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <Heading />
        <Heading />
        <Heading />
 

        <p>Hello World</p>
        <p>{2 + 2}</p>
        <p>{teste()}</p> 
      </header>
    </div>
  );
}

export default App;
