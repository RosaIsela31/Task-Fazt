import React, { Component } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import { todos } from './todos.json';
console.log(todos);




class App extends Component {
  constructor(){
    super();
    this.state = {
      todos : todos
    }
  }

  handleAddTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo = (index) =>{
   if(window.confirm('are you sure you want to delete it?')){
    this.setState({
      todos: this.state.todos.filter((e, i) => { 
        return i !== index
      })
    })
   }
    
  }


  render(){
    const todos = this.state.todos.map((todo, i) => {
      return(
        <div className='col-md-4' key={i}>
          <div className='card mt-4'>
            <div className='card-header'>
              <h3>{todo.title}</h3>
              <span className='badge badge-pill bange-danger ml-2'>
                { todo.priority }
              </span>
            </div>
            <div className='card-body'>
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            <div className='card-footer'>
              <button className='btn btn-danger' onClick={this.removeTodo.bind(this, i)}>Delete</button>

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
                  <span className='badge badge-pill badge-light ml-2'>
                  { this.state.todos.length }
                  </span>
                </a>
            </nav>
        </header>
          <div className='container'>
          <TodoForm onAddTodo={this.handleAddTodo}/>
            <div className='row mt-4'>
              { todos }
            </div>
          </div>
      </div>
    );
  }

}

export default App;
