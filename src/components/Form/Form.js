import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {
  
  handleSubmit = async (e) => {
    e.preventDefault();
    
    let data = await superagent.get('https://swapi.co/api/people?format=json');
    let count = data.body.count;
    let results = data.body.results;

    this.props.handleData(count, results);
  }


  render() {
    return(
      <form onSubmit = {this.handleSubmit}>
        <button>Click for StarWars Data</button>
      </form>
    )
  }
}

export default Form;
