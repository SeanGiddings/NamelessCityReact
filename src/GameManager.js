import React, { Component } from 'react';
import './GameManager.css';
import GameHeader from './GameHeader';
import Storyboard from './Storyboard';

class GameManager extends Component {
  render() {
    return (
      <div className="GameManager">
        <GameHeader></GameHeader>
        <Storyboard propName="test"></Storyboard>
      </div>
    );
  }
}

export default GameManager;
