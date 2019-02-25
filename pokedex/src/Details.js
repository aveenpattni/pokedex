import React, { Component } from 'react';
import Header from './Header';
import PokeDetails from './PokeDetails';

class Details extends Component {
  render() {
    return (
      <div className="details">
        <Header />
        <div className="search__block"></div>
        <div className="details__title">
          <h1>Pokémon Info</h1>
        </div>
        <PokeDetails />
      </div>
    )
  }
}

export default Details;