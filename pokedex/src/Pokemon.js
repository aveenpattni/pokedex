import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  render() {
    let {name} = this.props;
    return (
      <Link to={'/' + this.props.url}>
        <div className="pokemon">
          <div className="pokemon__name">
            <h3>Name:</h3>
            <h3 className="pokemon__name--value">{name}</h3>
          </div>
        </div>
      </Link>
    )
  }
}

export default Pokemon;