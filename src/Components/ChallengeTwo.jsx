import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: [],
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() { 
    //display the student list after 3 seconds
    setInterval(() => {
    this.setState({
      arr: studentList
    })
  }, 3000)
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    this.setState({
      arr: this.state.arr.sort(() => Math.random() - 0.5)
    })
    }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {this.state.arr.map((item, i) => 
              <li key={item}>{item}</li>
            )}
            {/* display the list of students by iterating through the array */}
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}
