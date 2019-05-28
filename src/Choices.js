import React, { Component } from 'react';
import './Choices.scss';

class Choices extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      firstChoice: 'Go on an adventure',
      secondChoice: 'Go Home and never return'
    };
  }

  componentDidUpdate(prevProps) {
    const {scene} = this.props;
    
    if (prevProps.scene !== scene) {
      if (scene == 1) {
          this.updateChoices( 'hey what\'s up', 'uhhh this is the second string');
      } else if (scene == 2) {
          this.updateChoices( 'third string', 'this is another button');
      }
    }
  }

  updateChoices(choiceOne, choiceTwo) {
    this.setState(state => ({
      firstChoice: choiceOne,
      secondChoice: choiceTwo
    }));
  }

  render() {
    const { nextScene } = this.props;
    const { firstChoice, secondChoice } = this.state;

    return (
      <div className="Choices__container">
        <button className="Choices__button" onClick={nextScene.bind(this)}>
          {firstChoice}
        </button>
        <button className="Choices__button" onClick={nextScene.bind(this)}>
          {secondChoice}
        </button>
      </div>
    );
  }
}

export default Choices;