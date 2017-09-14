import React,  { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from './common/reusableComponents/helloWorld';

export default class App extends Component {
  render() {
    return (
      <div>
      {
      //This is a comment
      }
        <NameForm />
      </div>
    )
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    {console.log(this.state)}
  }

  handleChange(event) {
    alert('event.target.value: ' + event.target.value);    
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
      {console.log(this.state.value)}
    return (

      <div>

      <form onSubmit={this.handleSubmit}>

      {console.log(this)}
        <label>
          Name:
          <input type="text"  />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}