import React,  { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from './common/reusableComponents/helloWorld';

export default class App extends Component {
  constructor() {
    super(...arguments)

    this.state = {
      greeteesName: "Sapta"
    };
  }
handleClick() {
   this.setState({greeteesName: "TenderFeet"});
   console.log("Clicked");
}
 
  render() {
    return (
     <div>
     <h1>ToDo: Attaching a handler event</h1>
     <h2>
       <SpecificUsesOfReusableComponentClasses/>
       <ReusableComponentClass1Hello greeteesName = {this.state.greeteesName} greetersName = "Mama" />
       <button onClick= {this.handleClick.bind(this)}> Click </button>

       <ReusableComponentClass2Button textToDisplay = "ClickAgain"/>

    </h2>
     </div>
    );
  }
}
class SpecificUsesOfReusableComponentClasses extends Component{
  render(){
    return(
      <div>
        <ReusableComponentClass1Hello greeteesName = "Guido" greetersName = "Mama" />
        <ReusableComponentClass2Button textToDisplay = "Exit" greetersName = "Mama" 

        />

      </div>
    );

  }
}
class ReusableComponentClass1Hello extends Component{
    render(){
      return(
        <div>
          Hello {this.props.greeteesName}
          ....from {this.props.greetersName}.
        </div>
      )
  }
}
class ReusableComponentClass2Button extends Component{
    render(){
      return(
        <button onClick ={App.handleClick}>
          {this.props.textToDisplay}
        </button>
      )
  }  
}

