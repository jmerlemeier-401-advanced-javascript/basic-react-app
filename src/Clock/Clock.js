import React from 'react';

class Clock extends React.Component{
  constructor (props) {
    super(props);
    //1. state initialized with an object including the current time.
    this.state={date: new Date()};
  }
  //3. Lifecycle method called. 
  componentDidMount(){
    this.timerID = setInterval(
      //call the component's tick method once a second
      () => this.tick(), 
      1000
    );
  }
  //5. IF clock removed from DOM, Reacts calls this and the times is stopped. 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  //4. Browser calls this every second
  tick() {
    //UI update by calling setState(). React knows the state has changed and calls render() again. The output is different so React updates the DOM accordingly. 
    this.setState({
      date:new Date()
    });
  }
  //2. React calls render method. DOM updated.
  render () {
    return(
      <>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </>
    );
  }
}

export default Clock;