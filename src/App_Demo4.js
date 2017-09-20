import React,  { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from './common/reusableComponents/helloWorld';

export default class App extends Component {
  componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                console.log(Date());
                return { unseen: "does not display" }
            });
        }, 1000);
    }    
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
    this.state = {value: 'Init'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    return (

      <div>
      <form onSubmit={this.handleSubmit}>
      
        <label>
          Name:
          <input type="text" />
          {console.log('dadada: '+this.state.value)}
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}