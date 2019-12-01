import React from 'react';

class Clock extends React.Component{
  constructor (props) {
    super(props);
    this.state={date: new Date()};
  }
  render () {
    return(
      <>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </>
    );
  }
}

export default Clock;