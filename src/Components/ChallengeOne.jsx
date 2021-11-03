import React, { Component } from 'react';
//import images
import Left from '../Assets/look-left.jpeg';
import Right from '../Assets/look-right.jpeg';

class ChallengeOne extends Component {
  //declare the state here
  state = {
      img:Left,
      text:'left'
  };

  //click left/right button handler goes here
  handlerLeft = () => {
        this.setState({
          img: Left,
          text: 'left'
        })
  }
  handlerRight = () => {
        this.setState({
          img: Right,
          text: 'right'
        })
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.img}
            alt={this.state.text}
          />
        </div>
        <button className="btn" onClick={this.handlerLeft}>⭠</button>
        <button className="btn" onClick={this.handlerRight}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;