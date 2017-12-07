import React, { Component } from 'react';


class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoDescription: '',
      todoPriority: 'Completed'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoDescription: '',
      todoPriority: 'Completed'
    });
  }

  render() {
    return (
      <div>
        <h5 className="float-left">Add New Task</h5>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputTodoTitle" className="col-sm-2 control-label"></label>
              <div className="col-sm-10">
                <input  name="todoTitle"
                        type="text"
                        className="form-control"
                        id="inputTodoTitle"
                        value={this.state.todoTitle}
                        onChange={this.handleInputChange}
                        placeholder="Task Title "></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoDesc" className="col-sm-2 control-label"></label>
              <div className="col-sm-10">
                <textarea   name="todoDescription"
                            className="form-control"
                            rows="3"
                            id="inputTodoDesc"
                            value={this.state.todoDescription}
                            onChange={this.handleInputChange}
                            placeholder="Task Description"></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoPriority" className="col-sm-2 control-label"></label>
              <div className="col-sm-10">
                <select   name="todoPriority"
                          className="form-control"
                          id="inputTodoPriority"
                          value={this.state.todoPriority}
                          onChange={this.handleInputChange}>
                  <option>InCompleted</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-dark btn-block">Submit</button>
              </div>
            </div>
          </form>
      </div>
    );
  }
}


export default FormComponent;
