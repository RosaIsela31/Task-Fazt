import React, { Component } from 'react';
import './App.css';

import { todos } from './todos.json';
console.log(todos);



class App extends Component {
  constructor(){
    super();
    this.state = {
      todos : todos
    }
  }


  render(){
    const todos = this.state.todos.map((todo, i) => {
      return(
        <div className='col-md-4'>
          <div className='card mt-4'>
            <div className='card-header'>
              <h3>{todo.title}</h3>
            </div>
            <div className='card-body'>
              <p>{todo.description}</p>
            </div>
          </div>
        </div>
      )    
    })
    
    return (

      <div className="App">
        <header className="App-header">
            <nav className='navbar navbar-dark bg-dark'>
                <a href='hi' className='text-white'>
                  Tasks
                </a>
            </nav>
        </header>
          <div className='container'>
            <div className='row mt-4'>
              { todos }
            </div>
          </div>
      </div>
    );
  }

}

export default App;
