import React, { Component } from 'react';
import './App.css';

const Header = (props) => {
  return (<h1>Simple Todo App</h1>);
};

const TodoItem = ({text}) => (
  <li>{text}</li>
);


class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        todos: [],
        newTodo: ''
      };
  }
  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((t, index) => (
      <TodoItem key={index} tect={t}/>
    ));
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
        <input
          className="todo-input"
          autoComplete = "off"
          type= "text"
          name="newTodo"
          placeholder="What needs to be done"
          value={newTodo}
          onchange={(e) => this.setState({[e.target]})}
        />
        </form>
      </div>
    );
  }
}

export default App;
