import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem'

// UI (view)
class App extends Component {
  // Data (model)
  state = {
    items: [
      { description: 'First', completed: true },
      { description: 'Second', completed: true },
      { description: 'Third', completed: false }
    ]
  }

  // onToggleItemAtIndex = (index) => {
  //   this.setState((prevState) => {
  //     // Get current items
  //     const items = prevState.items
  //     // Find the item with the particular 'index'
  //     const item = items[index]
  //     // Toggle completed: false becomes true, true becomes false
  //     item.completed = !item.completed

  //     // Return the changes we have
  //     return {
  //       items: items
  //     }
  //   })
  // }

  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      // Get current items
      const beforeItems = prevState.items

      const afterItems = beforeItems.map((item, currentIndex) => {
        // When we have found the index of the item to change
        if (currentIndex === index) {
          // const copy = Object.assign(
          //   {}, // Start with a new blank object
          //   item, // Copy key-value pairs from existing item
          //   { completed: !item.completed } // Override the completed to be the opposite of before
          // )
          return { 
            ...item, 
            completed: !item.completed 
          }
        }
        // No changes to make to this particular item
        else {
          return item
        }
      })

      // Return the changes we have
      return {
        items: afterItems
      }
    })
  }

  filterCompletedItems = function(items) {
    const completedItems = items.map((item) => (
      item.completed ? item : null
    ))
    console.log(completedItems)
    return completedItems
  }

  filterIncompletedItems = function(items) {
    const IncompletedItems = items.map((item) => (
      item.completed ? null : item
    ))
    console.log(IncompletedItems)
    return IncompletedItems
  }

  onChangeItemDescriptionAtIndex(index, description) {
    
  }

  render() {
    const items = this.state.items
    
    const total = items.length

    let totalCompleted = 0
    let totalIncomplete = 0
    items.forEach((item) => {
      if (item.completed) {
        totalCompleted += 1
      }
      else {
        totalIncomplete += 1
      }
    })
    return (
      <div className="App">
      <dl>
        <dt> Total </dt>
        <dd> {total} </dd>
      {
        items.map((item, index) => (
          <div>
            <ToDoItem 
              key={ index }
              description={ item.description }
              completed={ item.completed }
              onToggleCompleted={
                () => {
                  console.log('ToDoItem onToggleCompleted received', index)
                  this.onToggleItemAtIndex(index)
                }
              }
            />
          </div>
        ))
      }

        <dt> Total Completed </dt>
        <dd> {totalCompleted} </dd>
        { this.filterCompletedItems(items).map((item, index) => {
            if (item) {
              return (
                <ToDoItem
                  key={ index }
                  description={ item.description }
                  completed={ item.completed }
                  onToggleCompleted={
                    () => {
                      console.log('ToDoItem onToggleCompleted received', index)
                      this.onToggleItemAtIndex(index)
                    }
                  }
                />
              )
            }
            else {
              return null
            }
          })
          }


        <dt> Total Incomplete </dt>
        <dd> {totalIncomplete} </dd>
        { this.filterIncompletedItems(items).map((item, index) => {
            if (item) {
              return (
                <ToDoItem
                  key={ index }
                  description={ item.description }
                  completed={ item.completed }
                  onToggleCompleted={
                    () => {
                      console.log('ToDoItem onToggleCompleted received', index)
                      this.onToggleItemAtIndex(index)
                    }
                  }
                />
              )
            }
            else {
              return null
            }
          })
          }
      </dl>
      </div>
    );
  }
}

export default App;
