import React from "react";
import Todo from "./Todo";

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
            />
          );
        })}
      </ul>
    );
  }
}

export default Todos;
