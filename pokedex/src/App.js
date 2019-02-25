import React, { Component } from 'react';
import Header from './Header';
import PokeList from './PokeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PokeList />
      </div>
    );
  }
}

export default App;