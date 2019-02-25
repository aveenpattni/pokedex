import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.scss';
import App from './App';
import Details from './Details';

ReactDOM.render(<BrowserRouter>
                  <Switch>
                    <Route path='/https://pokeapi.co' component={Details} />
                    <Route path='/' component={App} />
                  </Switch>
                </BrowserRouter>
  , document.getElementById('Pokedex App'));