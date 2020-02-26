import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Fields from "./components/Fields";
import Loader from "./components/Loader";
import About from "./components/About";
const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const axios = require("axios");
let loader;
class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    loader = document.querySelector("#loader");
    axios
      .get(`${todosUrl}?_limit=5`)
      .then(res => this.setState({ todos: res.data }))
      .catch(err => console.log(err));
  }

  addToDo = e => {
    loader.style.display = "block";
    const input = document.querySelector("input");
    if (input.value !== "") {
      axios
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
        .catch(err => console.log(err));
    }
  };

  changeCompleted = e => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (Number(e.target.parentElement.parentElement.id) === todo.id)
          todo.completed = e.target.checked;
        return todo;
      })
    });
  };

  deleteTodo = e => {
    loader.style.display = "block";
    let ele =
      e.target.className === "far fa-trash-alt"
        ? e.target.parentElement.parentElement
        : e.target.parentElement;
    console.log(`${todosUrl}/${ele.id}`);
    axios
      .delete(`${todosUrl}/${ele.id}`)
      .then(res => {
        this.setState({
          todos: this.state.todos.filter(todo => !(Number(ele.id) === todo.id))
        });
        loader.style.display = "none";
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Router>
        <main>
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Fields addToDo={this.addToDo} />
                <Todos
                  todos={this.state.todos}
                  deleteTodo={this.deleteTodo}
                  changeCompleted={this.changeCompleted}
                />
                <Loader />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </main>
      </Router>
    );
  }
}
export default App;
