import React, { Component } from "react";
import Radium from "radium";

const styles = {
  div: {
    width: "calc(100% - 5rem)",
    display: "inline-block",
    marginLeft: "1.7rem"
  },
  input: {
    outline: "none",
    borderWidth: "0 0 2px 0",
    borderColor: "#15a857",
    fontSize: "1rem",
    width: "calc(100% - 3rem)"
  },
  button: {
    width: "1rem",
    height: ".5rem",
    margin: ".2rem",
    outline: "none",
    background: "none",
    borderWidth: "0 0 2px 2px",
    borderColor: "#15a857",
    borderStyle: "solid",
    transform: "rotate(-45deg)",
    ":hover": {
      borderColor: "#00782c",
      transform: "rotate(-45deg) scale(1.1)"
    }
  }
};

class EditableText extends Component {
  state = {
    value: this.props.text,
    editable: false
  };

  handleEditStateChange = () => {
    this.setState({
      editable: !this.state.editable
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    if (this.state.editable)
      return (
        <div style={styles.div}>
          <input
            style={styles.input}
            value={this.state.value}
            onChange={e => this.handleChange(e)}
            onBlur={this.handleEditStateChange}
            onKeyDown={e => e.key === "Enter" && this.handleEditStateChange()}
          />
          <button style={styles.button} onClick={this.handleEditStateChange} />
        </div>
      );
    return (
      <div style={styles.div} onClick={this.handleEditStateChange}>
        {this.state.value}
      </div>
    );
  }
}

export default Radium(EditableText);
