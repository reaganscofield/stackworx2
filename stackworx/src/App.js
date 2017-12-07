import React, { Component } from 'react';
import './App.css';
import FormComponent from './Components/FormComponent';
import NavbarComponent from './Components/NavbarComponent';





var todos = [
  // {
  //   todoTitle: 'My first Task',
  //   todoDescription: 'Task description',
  //   todoPriority: 'Completed'
  // }
  // {
  //   todoTitle: 'My second Task',
  //   todoDescription: 'Task description',
  //   todoPriority: 'Completed'
  // },
  // {
  //   todoTitle: 'My third Task',
  //   todoDescription: 'Task description',
  //   todoPriority: 'Completed'
  // }
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos,
      completed: 'Click Here To Completed'
    };
    // binding onAddTodo From Form Comp
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  //getiing data from formcomponents and update them to todos
  handleAddTodo(todo) {
    this.setState({todos: [...this.state.todos, todo]});
  }

  //NEW DELETING TASK
  ///////////////////////////////////////////////////////
    handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function (e, i) {
        return i !== index;
      })
    });
  }


//NEW
  ///////////////////////////////////////////////////////
  //New Function to complete Stack
  addEvents(){
    this.setState({completed: 'Completed'});
  }
  ////////////////////////////////////////////
  


  render() {
    return (
      <div className="App">
      <NavbarComponent />
      <div className="container">

        <div className="mt-5">
          <h3>Simple Todo Tasks Application</h3>
        </div>
        <div className="w-75 p-3 self">
        <FormComponent  onAddTodo={this.handleAddTodo} />

        <h4>
          All Tasks By Default <span className="badge badge-info">{this.state.todos.length}</span>
        </h4>

        <ul className="list-group">
          { this.state.todos.map((todo, index) =>
              <li className="list-group-item" key={index}>
                <h4 className="list-group-item-heading"> {todo.todoTitle}
                  {/* NEW */}
                  <small onClick={this.addEvents.bind(this)}><span className="badge badge-info ml-2">
                  {this.state.completed}</span></small>
                </h4>
                <p>{todo.todoDescription}</p>    
                {/* 
                    NEW
                    inside the binding function i have pass an index as 
                    a second parameters that can give access to spacific task 
                    i want remove from list 
                */}
                <button className="btn btn-danger btn-sm float-right" onClick={this.handleRemoveTodo.bind(this, index)}>Delete Task</button>
                 {/* 
                    NEW
                    i have pass new event inside the this button and it 
                    function it can be find on 59 to 62 and i have pass the same 
                    function on line 87 to inclide event inside the small tag
                */}
                <button className="btn btn-success btn-sm float-left" onClick={this.addEvents.bind(this)}>{this.state.completed}</button>
              </li>
          )}
        </ul>
        </div>
      </div>
      </div>
    );
  }
}



export default App;
