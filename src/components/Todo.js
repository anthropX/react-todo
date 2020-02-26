import React from "react";
import PropTypes from "prop-types";

export default class Todo extends React.Component {
  render() {
    const { todo, deleteTodo, changeCompleted } = this.props;
    const { id, title, completed } = todo;
    return (
      <li id={id} className="todo">
        <div>
          {completed ? (
            <input type="checkbox" defaultChecked onChange={changeCompleted} />
          ) : (
            <input type="checkbox" onChange={changeCompleted} />
          )}
          <p>{title}</p>
        </div>
        <div className="trashcan" onClick={deleteTodo}>
          <i className="far fa-trash-alt"></i>
        </div>
      </li>
    );
  }
}

// PropTypes
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  changeCompleted: PropTypes.func.isRequired
};
