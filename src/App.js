import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoItem description='First' completed />
        <ToDoItem description='Second' completed />
        <ToDoItem description='Third' />
      </div>
    );
  }
}

export default App;
