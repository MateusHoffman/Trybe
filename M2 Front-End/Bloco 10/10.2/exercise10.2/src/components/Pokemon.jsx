import React, { Component } from 'react'

export class Pokemon extends Component {
  render() {
    const { pokemon } = this.props
    return (
      <div className='card-pokemon'>
        <div className='card-info'>
          <p>{pokemon.name}</p>
          <p>{`Type:  ${pokemon.type}`}</p>
          <p>{`Weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
        </div>
        <img className='card-image' src={pokemon.image} alt={`Pokemon ${pokemon.name}`} />
      </div>
    )
  }
}

export default Pokemon