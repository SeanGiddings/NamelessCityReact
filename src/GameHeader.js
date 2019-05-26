import React, { Component } from 'react';
import './GameHeader.scss';

class GameHeader extends Component {
  render() {
    return (
      <div className="GameHeader__container">
        <div className="GameHeader__title">
            <h1>The Nameless City</h1>
        </div>
        <div className="GameHeader__subtitle">
            <h2>A Text Adventure based on the short story by HP Lovecraft</h2>
        </div>
      </div>
    );
  }
}

export default GameHeader;
