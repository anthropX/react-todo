import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <li id={this.props.todo.id} className="todo">
        <p>{this.props.todo.title}</p>
        <div className="trashcan" onClick={this.props.deleteTodo}>
          <i className="far fa-trash-alt"></i>
        </div>
      </li>
    );
  }
}

export default Todo;
