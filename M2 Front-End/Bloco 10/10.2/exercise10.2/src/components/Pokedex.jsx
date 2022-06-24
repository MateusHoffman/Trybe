import React, { Component } from 'react'
import Pokemon from '../components/Pokemon'

export class Pokedex extends Component {
  render() {
    // console.log(this.props.pokemons);
    const { pokemons } = this.props
    return (
      <>
        <h1>Pokedex</h1>
        <div className='pokedex'>
          {
            pokemons.map((e) => <Pokemon pokemon={e}/>)
          }
        </div>
      </>
    )
  }
}

export default Pokedex