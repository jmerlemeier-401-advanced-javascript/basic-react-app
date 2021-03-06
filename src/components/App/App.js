import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from '../Welcome/Welcome';
import Clock from '../Clock/Clock';
import Toggle from '../Toggle/Toggle';
import Counter from '../Counter/Counter';
import Form from '../Form/Form';
import NameForm from '../NameForm/NameForm';
import FlavorForm from '../FlavorForm/FlavorForm';
import Reservation from '../Reservation/Reservation';
import Calculator from '../Calculator/Calculator';

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
      <hr></hr>
      <Toggle />
      <p>Toggle Button</p>
      <hr></hr>
      <Counter />
      <hr></hr>
      <Form handleData={this.handleData} />
      <ul>
      {/* can inject raw JS into this with curlies */}
      {
        this.state.results.map(person => {
          return <li key={person.name}>{person.name}</li>
        })
      }
      </ul>
      <hr></hr>
      <NameForm />
      <hr></hr>
      <FlavorForm />
      <hr></hr>
      <Reservation />
      <hr></hr>
      <Calculator />
      <hr></hr>
    </div>
  );
}
}

export default App;
