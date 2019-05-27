import React, { Component } from 'react';
import './Storyboard.scss';

class Storyboard extends Component {
  render() {
    return (
      <div className="Storyboard__container">
        <div className="Storyboard__text">
            {this.props.propName}
        </div>
      </div>
    );
  }
}

export default Storyboard;