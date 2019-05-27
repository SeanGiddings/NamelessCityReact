import React, { Component } from 'react';
import './GameManager.css';
import GameHeader from './GameHeader';
import Storyboard from './Storyboard';
import Choices from './Choices';

class GameManager extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      scene: 0,

    };
  }

  nextScene = () => {
    console.log("test");
    this.setState(state => ({
      scene: state.scene++,
    }));
  }

  render() {
    const {scene} = this.state;

    return (
      <div className="GameManager">
        <GameHeader scene={scene}></GameHeader>
        <Storyboard scene={scene}></Storyboard>
        <Choices nextScene={this.nextScene}></Choices>
      </div>
    );
  }
}

export default GameManager;
