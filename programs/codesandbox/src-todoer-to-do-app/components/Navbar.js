import React, { Component } from "react";
import Radium from "radium";
import ItemCreator from "./ItemCreator";

const styles = {
  navbar: {
    backgroundColor: "#15a857",
    width: "100%",
    height: "3.5rem",
    position: "absolute",
    bottom: "0",
    zIndex: 10
  },
  label: {
    display: "inline-block",
    margin: "1rem 1rem 1rem 1.7rem",
    fontSize: "1.1rem"
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: "0 0 2px 0",
    borderColor: "rgba(0, 120, 44, .5)",
    outline: "none",
    fontSize: "1rem",
    transition: ".2s",
    width: "calc(100% - 13rem)",

    ":focus": {
      borderColor: "#00782c"
    }
  }
};

class Navbar extends Component {
  state = {
    inputVal: ""
  };

  handleTxtChange = e => {
    this.setState({ inputVal: e.target.value });
  };

  handlePlusClick = () => {
    if (this.state.inputVal !== "") {
      this.props.handleNewTask(this.state.inputVal);
      this.setState({ inputVal: "" });
    }
  };

  render() {
    return (
      <div style={styles.navbar}>
        <strong>
          <label for="new-task" style={styles.label}>
            New Task:
          </label>
        </strong>
        <input
          id="new-task"
          type="text"
          style={styles.input}
          placeholder={"Enter new task"}
          value={this.state.inputVal}
          onChange={this.handleTxtChange}
          onKeyPress={e => e.key === "Enter" && this.handlePlusClick()}
        />
        <ItemCreator handlePlusClick={this.handlePlusClick} />
      </div>
    );
  }
}

Navbar = Radium(Navbar);

export default Navbar;
