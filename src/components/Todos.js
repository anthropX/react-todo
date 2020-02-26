import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={this.props.deleteTodo}
              changeCompleted={this.props.changeCompleted}
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

export default Todos;
