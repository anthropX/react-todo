import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

export default class Todos extends React.Component {
  render() {
    const { todos, deleteTodo, changeCompleted } = this.props;
    return (
      <ul>
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              changeCompleted={changeCompleted}
            />
          );
        })}
      </ul>
    );
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  changeCompleted: PropTypes.func.isRequired
};
