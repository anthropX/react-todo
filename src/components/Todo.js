import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <li id={this.props.todo.id} className="todo">
        <div>
          {this.props.todo.completed ? (
            <input
              type="checkbox"
              defaultChecked
              onChange={this.props.changeCompleted}
            />
          ) : (
            <input type="checkbox" onChange={this.props.changeCompleted} />
          )}
          <p>{this.props.todo.title}</p>
        </div>
        <div className="trashcan" onClick={this.props.deleteTodo}>
          <i className="far fa-trash-alt"></i>
        </div>
      </li>
    );
  }
}

export default Todo;
