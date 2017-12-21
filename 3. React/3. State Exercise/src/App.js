import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['Sailing','React']
        },
        {
          name: "Matt",
          hobbies: ['Math', 'D3']
        },
        {
          name: "Colt",
          hobbies: ['CSS','Nodejs']
        },
        {
          name: 'Elie',
          hobbies: ['Music', 'ES2015']
        }
      ]
    };

    setTimeoute(() => {

    },5000);
  };
  render() {
      const instructors = this.state.instructors.map((instructor, index) => (
          <li key ={index}>
            <h3>{instructor.name}</h3>
            <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
          </li>
      ));

      return(
        <div className="App">
          <ul>
            {instructors}
          </ul>
        </div>
      )
  }
}

export default App;
