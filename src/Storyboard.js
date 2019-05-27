import React, { Component } from 'react';
import './Storyboard.scss';

class Storyboard extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
    };
  }

  render() {
    return (
      <div className="Storyboard__container">
        <div className="Storyboard__text">
            
        </div>
      </div>
    );
  }
}

export default Storyboard;