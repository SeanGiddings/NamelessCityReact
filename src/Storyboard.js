import React, { Component } from 'react';
import './Storyboard.scss';

class Storyboard extends Component {
  render() {
    return (
      <div className="Storyboard__container">
        <div className="Storyboard__text">
            <h1>The Nameless City</h1>
        </div>
        <div className="Storyboard__subtitle">
            <h2>A Text Adventure based on the short story by HP Lovecraft</h2>
        </div>
      </div>
    );
  }
}

export default Storyboard;