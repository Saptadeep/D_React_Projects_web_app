import React,  { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from './common/reusableComponents/helloWorld';

export default class App extends Component {



  render() {
    return (
        <NameForm />
    )
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
      alert('ComponentDidMount: ' + this.inputtt.value )
    }
  handleSubmit() {
    alert('A name was submitted: ' + this.inputtt.value);
  }
  
  handleChange() {
    alert('A name was submitted: ' + this.inputtt.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input onChange = {this.handleChange} type="text" ref={(inputtt) => this.inputtt = inputtt} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}