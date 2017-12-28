import React, { Component } from 'react';
import Recipe from './Recipe';
import Header from './Header';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <RecipeList />
      </div>
    );
  }
}

export default App;
