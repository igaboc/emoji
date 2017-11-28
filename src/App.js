import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem'

// Data (model)
const items = [
  { description: 'First', completed: true },
  { description: 'Second', completed: true },
  { description: 'Third', completed: false }
]

// UI (view)
class App extends Component {
  render() {
    return (
      <div className="App">
      {
        items.map((item, index) => (
          <ToDoItem 
            key={ index }
            description={ item.description }
            completed={ item.completed }
          />
        ))
      }
      </div>
    );
  }
}

export default App;
