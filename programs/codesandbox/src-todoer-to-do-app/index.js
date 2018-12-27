import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "../src/components/Navbar";
import List from "../src/components/List";
import Divider from "../src/components/Divider";
import "./styles.css";
import indexDBfunc from "./indexDB.js";

class App extends Component {
  state = {
    todo: [],
    done: [],
    taskNum: 0,
    id: 0
  };

  componentDidMount = _ => {
    indexDBfunc(this, "get");
  };

  checkClickHandler = e => {
    if (this.state.todo.includes(e)) {
      this.setState(
        {
          todo: [...this.state.todo.filter(a => a !== e)],
          done: [e, ...this.state.done]
        },
        _ => indexDBfunc(this, "post", this.state)
      );
    } else {
      this.setState(
        {
          todo: [...this.state.todo, e],
          done: [...this.state.done.filter(a => a !== e)]
        },
        _ => indexDBfunc(this, "post", this.state)
      );
    }
  };

  handleNewTask = task => {
    this.setState(
      {
        todo: [{ title: task, id: this.state.taskNum + 1 }, ...this.state.todo],
        taskNum: this.state.taskNum + 1
      },
      _ => indexDBfunc(this, "post", this.state)
    );
  };

  itemDeletionHandler = (item, list) => {
    this.setState(
      { [list]: [...this.state[list].filter(a => a !== item)] },
      _ => indexDBfunc(this, "post", this.state)
    );
  };

  rankUpdateHandler = (dir, item) => {
    const index = this.state.todo.indexOf(item);

    switch (dir) {
      case "up":
        if (index !== 0) {
          this.setState(
            {
              todo: [
                ...this.state.todo.slice(0, index - 1),
                this.state.todo[index],
                this.state.todo[index - 1],
                ...this.state.todo.slice(index + 1, this.state.todo.length)
              ]
            },
            _ => indexDBfunc(this, "post", this.state)
          );
        }
        break;
      case "down":
        if (index !== this.state.todo.length - 1) {
          this.setState(
            {
              todo: [
                ...this.state.todo.slice(0, index),
                this.state.todo[index + 1],
                this.state.todo[index],
                ...this.state.todo.slice(index + 2, this.state.todo.length)
              ]
            },
            _ => indexDBfunc(this, "post", this.state)
          );
        }
        break;
      default:
        console.log("Something went wrong");
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          handlePlusClick={this.plusClickHandler}
          handleNewTask={this.handleNewTask}
        />
        <Divider theme={"#15a857"}>To do</Divider>
        {this.state.todo.length > 0 && (
          <List
            tasks={this.state.todo}
            handleCheckClick={this.checkClickHandler}
            handleDeleteItem={item => this.itemDeletionHandler(item, "todo")}
            handleRankUpdate={(dir, item) => this.rankUpdateHandler(dir, item)}
          />
        )}
        <Divider theme={"#00782c"}>Done</Divider>
        <List
          tasks={this.state.done}
          itemsChecked={true}
          handleCheckClick={this.checkClickHandler}
          handleDeleteItem={item => this.itemDeletionHandler(item, "done")}
          handleRankUpdate={(dir, item) => this.rankUpdateHandler(dir, item)}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
