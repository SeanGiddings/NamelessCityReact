import React, { Component } from 'react';
import './App.css';
import GameHeader from './GameHeader';
import Storyboard from './Storyboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameHeader></GameHeader>
        <Storyboard></Storyboard>
      </div>
    );
  }
}

export default App;
