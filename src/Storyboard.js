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
    const {mainStoryText} = this.props;
    return (
      <div className="Storyboard__container">
        <div className="Storyboard__text">
          replace me
        </div>
      </div>
    );
  }
}

export default Storyboard;