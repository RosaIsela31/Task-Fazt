import React, { Component } from 'react';

class TodoForm extends Component{
  constructor(){
    super();
    this.state = {
      title : '',
      responsible : '',
      description : '',
      priority : 'low'
    };
  }

  handleInput = (e) => {
    console.log(e.target.value, e.target.name);
  }


  render(){
    return(
      <div className='card'>
        <form className='card-body'>
          <div className='form-group'>
            <input 
              type='text'
              name='title'
              className='form-control'
              placeholder='Title'
              onChange={this.handleInput}
            />
          </div>
          <div className='form-group'>
            <input 
              type='text'
              name='responsible'
              className='form-control'
              placeholder='Responsible'
              onChange={this.handleInput}
            />
          </div>
          <div className='form-group'>
            <input 
              type='text'
              name='description'
              className='form-control'
              placeholder='Description'
              onChange={this.handleInput}
            />
          </div>
          <div className='form-group'>
            <select 
              name='priority'
              className='form-control'
              onChange={this.handleInput}
            >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            </select>
          </div>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;