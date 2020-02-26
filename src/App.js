import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Fields from "./components/Fields";
const http = require("./Http");

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    http
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addToDo = e => {
    const input = document.querySelector("input");
    if (input.value !== "") {
      this.setState({
        todos: [...this.state.todos, { title: input.value, completed: false }]
      });
    }
  };

  changeCompleted = e => {
    this.setState({
      todos: [
        ...this.state.todos.map(todo => {
          if (Number(e.target.parentElement.parentElement.id) === todo.id)
            todo.completed = e.target.checked;
          return todo;
        })
      ]
    });
  };

  deleteTodo = e => {
    let ele =
      e.target.className === "far fa-trash-alt"
        ? e.target.parentElement.parentElement
        : e.target.parentElement;
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => (ele.id === todo.id ? false : true))
      ]
    });
  };

  render() {
    return (
      <main>
        <Header />
        <Fields addToDo={this.addToDo} />
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          changeCompleted={this.changeCompleted}
        />
      </main>
    );
  }
}
export default App;
