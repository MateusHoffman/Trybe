import React, { Component } from 'react'
import './App.css'
import Pokedex from '../src/components/Pokedex'
import pokemons from '../src/data/data'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Pokedex pokemons={pokemons}/>
      </div>
    )
  }
}

export default App
