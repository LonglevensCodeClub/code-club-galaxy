import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './Canvas'

class App extends Component {
  render() {
    const data = [30, 50, 10, 5, 70]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Canvas data={data} />
      </div>
    );
  }
}

export default App;
