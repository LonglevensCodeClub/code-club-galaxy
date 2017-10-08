import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import Canvas from './Canvas'

import { planets } from './planets'

import { updatePlanet } from './actions'

class App extends Component {
  componentDidMount() {
    Object.entries(planets).forEach(([name, planet]) => {
      planet((updatedPlanet) => this.props.updatePlanet(name, updatedPlanet))
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Code Club Galaxy</h1>
        </header>
        <p className="App-intro">
          Write your code in <code>./planets</code> and add to <code>./planets/index.js</code> to create a new planet.
        </p>
        <Canvas />
      </div>
    );
  }
}

export default connect(null, {
  updatePlanet
})(App)
