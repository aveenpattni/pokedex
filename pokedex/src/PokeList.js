import React, { Component } from 'react'
import axios from 'axios';
import Pokemon from './Pokemon';

class PokeList extends Component {
  constructor(){
    super();
    this.state={
      pokemons: [],
      searchValue: "",
      displayList: []
    }
    this.getPokeList();
  }
  getPokeList = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000').then(res =>{
      let data = res.data.results;
      this.setState({pokemons:data})
      this.setState({displayList:data})
    }).catch(err => console.log(err))
  }
  searchSubmit = (event) => {
    event.preventDefault();
    let search = event.target.firstElementChild.value;
    if (!search){
      this.setState({
        searchValue: search,
        displayList: this.state.pokemons
      });
    } else{
      this.setState({
        searchValue: search,
        displayList: this.state.pokemons.filter((i) => i.name.includes(search))
      });
    }
  }
  render() {
    return (
      <div>
        <div className="search">
          <div className="search__block"></div>
          <div className="search__bar">
              <form onSubmit={this.searchSubmit} autoComplete="off">
                <input type="text"
                name="searchBar" placeholder="Search" maxLength="80"/>
              </form>
            </div>
        </div>
        <div className="pokeList">
          <h1 className="pokeList__title">Gotta catch em all!</h1>
          {this.state.displayList.map((item) => {
            return <Pokemon name={item.name} url={item.url} key={item.url}/>
          })}
        </div>
      </div>
    )
  }
}

export default PokeList;

//name={(item.name.charAt(0).toUpperCase()+item.name.slice(1))}