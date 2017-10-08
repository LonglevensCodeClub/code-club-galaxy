import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './Canvas'

class App extends Component {
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

export default App;
