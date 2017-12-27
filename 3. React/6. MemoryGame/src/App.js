import React, { Component } from 'react';
import logo from './logo.svg';
import Box from './Box';
import Header from './Header'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      BoxList: ['']
    }
  }

  

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
