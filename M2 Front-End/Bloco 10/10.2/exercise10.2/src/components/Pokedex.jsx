import React, { Component } from 'react'
import Pokemon from '../components/Pokemon'
import pokemons from '../data/data'

export class Pokedex extends Component {
  state = {
    indexPokemon: 0,
    arrayPokemons: pokemons,
  }

  arrayPokemons = (event) => {
    const {target: { innerText }} = event
    
  }

  nextPokemon = () => {
    const { indexPokemon, arrayPokemons } = this.state
    if (indexPokemon === arrayPokemons.length - 1) {
      this.setState({indexPokemon: 0})
    } else {
      this.setState({indexPokemon: indexPokemon + 1})
    }
  }

  render() {
    const { pokemons } = this.props
    const { indexPokemon } = this.state
    return (
      <>
        <h1>Pokedex</h1>
        <div className='pokedex'>
          {<Pokemon pokemon={pokemons[indexPokemon]}/>}
        </div>
        <button
          className="btn-next-pokemon"
          type='button'
          onClick={this.nextPokemon}
        ><span>Next Pokemon </span></button>
        {
          <div className='div-btn-types'>
            {[...new Set(pokemons.map((e) => e.type))]
              .map((e) => <button className='btn-types' onClick={this.arrayPokemons}>{e}</button>)}
          </div>
        }
      </>
    )
  }
}

export default Pokedex