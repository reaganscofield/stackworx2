import React, { Component } from 'react';
import './App.css';
import FormComponent from './Components/FormComponent';
import NavbarComponent from './Components/NavbarComponent';





var todos = [
  {
    todoTitle: 'My first Task',
    todoDescription: 'Task description',
    todoPriority: 'Completed'
  },
  {
    todoTitle: 'My second Task',
    todoDescription: 'Task description',
    todoPriority: 'Completed'
  },
  {
    todoTitle: 'My third Task',
    todoDescription: 'Task description',
    todoPriority: 'Completed'
  }
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos,
      completed: 'Complete'
    };
    // binding onAddTodo From Form Comp
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  //getiing data from formcomponents and update them to todos
  handleAddTodo(todo) {
    this.setState({todos: [...this.state.todos, todo]});
  }

addEvent(){
  console.log("hi");
}

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
                <h4 className="list-group-item-heading">
                  {todo.todoTitle} <small><span className="badge badge-info ml-2">
                  {todo.todoPriority}</span></small>
                </h4>
                <p>{todo.todoDescription}</p>
		<button onClick={this.addEvent.bind(this)} class="btn btn-info"
		  >{this.state.complete}</button>
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
