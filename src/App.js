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
      <TheCalledComponent placeHolder = "123" />
      <TheCalledComponent placeHolder = "456" />
      </div>
    )
  }
}

class TheCalledComponent extends Component{
  constructor(props){
    super(props)
    alert(this.props.placeHolder)
  }

  render(){
    return(
      <h1>
      {this.props.placeHolder}
      </h1>
    )
}
}