import React from 'react';

class FlavorForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {value: 'chocolate'}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleChange(e) {
    this.setState({value: e.target.value}); 
  }

  handleSubmit(e) {
    alert('Your favorite Flavor of Ice Cream is: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your favorite ice cream flavor: 
         <select value={this.state.value} onChange={this.handleChange}>
           <option value="blackberrychip">Blackberry Chip</option>
           <option value="vanilla">Vanilla</option>
           <option value="cookiedough">Cookie Dough</option>
           <option value="mint">Mint Chip</option>
           <option value="rockyroad">RockyRoad</option>
           <option value="strawberry">Strawberry</option>
           <option value="saltedcaramel">Salted Caramel</option>
           <option value="greentea">Green Tea</option>
         </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default FlavorForm;