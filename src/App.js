import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Fields from "./components/Fields";
const http = require("./Http");
const uuid = require("uuid");

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Complete React crash course",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Continue with the MERN course",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Find a job",
        completed: true
      }
    ]
  };

  addToDo = e => {
    const input = document.querySelector("input");
    if (input.value !== "") {
      this.setState({
        todos: [...this.state.todos, { title: input.value, completed: false }]
      });
    }
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
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </main>
    );
  }
}
export default App;
