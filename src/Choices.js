import React, { Component } from 'react';
import './Choices.scss';

class Choices extends Component {

  render() {
    const {nextScene} = this.props;

    return (
      <div className="Choices__container">
        <button className="Choices__button" onClick={nextScene}>
            click me
        </button>
      </div>
    );
  }
}

export default Choices;