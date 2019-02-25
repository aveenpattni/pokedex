import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from'./private/mainLogo.jpeg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to={'/'}>
          <div className="header__logo">
            <img src={logo} alt="Logo"/>
          </div>
        </Link>
        <div className="header__title">
          <h1>Pokédex</h1>
        </div>
      </div>
    )
  }
}

export default Header