import React, { Component } from 'react'
import axios from 'axios';

class PokeDetails extends Component {
  constructor(){
    super();
    this.state={
      id:{}
    }
    this.getPokemon(window.location.href.split('/')[(window.location.href.split('/').length -2)]);
  }
  getPokemon = (id) =>{
    axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then(res => {
      this.setState({
        id: res.data
      });
    }).catch(err => console.log(err))
  }
  render() {
    let types = '';
    let pokePic = '';
    if (this.state.id['types']) {
      for(let i = 0; i < this.state.id['types'].length; i++){
        types = types + this.state.id['types'][i].type.name + " ";
      }
      pokePic = this.state.id.sprites['front_default'];
    }
    return (
      <div className="pokeDetails">
        <div className="pokeDetails__sec">
            <h3>Name:</h3>
            <h3 className="pokeDetails__sec--value">{this.state.id.name}</h3>
            <img className="pokeDetails__sec--image" src={pokePic} alt="Pokémon" />
        </div>
        <div className="pokeDetails__sec">
            <h3>Height:</h3>
            <h3 className="pokeDetails__sec--value">{this.state.id.height}</h3>
        </div>
        <div className="pokeDetails__sec">
            <h3>Weight:</h3>
            <h3 className="pokeDetails__sec--value">{this.state.id.weight}</h3>
        </div>
        <div className="pokeDetails__sec">
            <h3>Types:</h3>
            <h3 className="pokeDetails__sec--value">{types}</h3>
        </div>
        <div className="pokeDetails__sec">
            <h3>ID:</h3>
            <h3 className="pokeDetails__sec--value">{this.state.id.id}</h3>
        </div>
        <div className="pokeDetails__sec">
            <h3>Order:</h3>
            <h3 className="pokeDetails__sec--value">{this.state.id.order}</h3>
        </div>
      </div>
    )
  }
}

export default PokeDetails;