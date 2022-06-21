import React from 'react';
import './App.css';
// import pokemons from './services/data';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        {/* <Pokedex arrayPokemons={pokemons} /> */}
        <Pokedex />
      </div>
    );
  }

}

export default App;