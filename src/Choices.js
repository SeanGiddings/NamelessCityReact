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

  componentDidUpdate() {
    console.log("this DID update!")
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