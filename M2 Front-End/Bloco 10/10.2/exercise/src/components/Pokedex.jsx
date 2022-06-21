import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../services/data';

class Pokedex extends React.Component {
  render() {
    // const { arrayPokemons } = this.props;
    return (
      <div className="pokedex">
        {/* {arrayPokemons.map((el) => <Pokemon key={el.id} pokemon={el} />)} */}
        {pokemons.map((el) => <Pokemon key={el.id} pokemon={el} />)}
      </div>
    );
  }
}

export default Pokedex;