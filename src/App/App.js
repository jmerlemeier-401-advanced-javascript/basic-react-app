import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from '../Welcome/Welcome';
import Clock from '../Clock/Clock';
import Toggle from '../Toggle/Toggle';
import Form from '../Form/Form';

class App extends React.Component {
  constructor() {
    super() //calls parent
    //All the things your app cares about. 
    this.state = {
      title: 'My Rad App',
      copyright: 'J. Erlemeier',
      count:0,
      results: [],
    }
  }

  handleData = (count, results) => {
    this.setState({ count, results });
  }
  
  render() {
  return (
    <div className="App">
      <Welcome name="Julie" />
      <Clock />
      <Toggle />
      <Form handleData={this.handleData} />
      <ul>
      {/* can inject raw JS into this with curlies */}
      {
        this.state.results.map(person => {
          return <li key={person.name}>{person.name}</li>
        })
      }
      </ul>
    </div>
  );
}
}

export default App;
