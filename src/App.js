import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Fields from "./components/Fields";
import Loader from "./components/Loader";
const http = require("./Http");
const todosUrl = "https://jsonplaceholder.typicode.com/todos";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    http
      .get(`${todosUrl}?_limit=5`)
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addToDo = e => {
    const loader = document.querySelector("#loader");
    loader.style.display = "block";
    const input = document.querySelector("input");
    if (input.value !== "") {
      http
        .post(todosUrl, {
          userId: 1,
          title: input.value,
          completed: false
        })
        .then(res => {
          this.setState({
            todos: [...this.state.todos, res.data]
          });
          loader.style.display = "none";
        })
        .catch(err => {
          console.log(err);
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
        ...this.state.todos.filter(todo => {
          return !(Number(ele.id) === todo.id);
        })
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
        <Loader />
      </main>
    );
  }
}
export default App;
