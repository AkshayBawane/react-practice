import React from "react";
import Radium from "radium";

const buttonStyle = {
  border: "none",
  outline: "none",
  fontSize: "2rem",
  display: "inline-block",
  position: "absolute",
  right: ".7rem",
  top: "0rem",
  height: "3.5rem",
  width: "3.5rem",
  backgroundColor: "transparent",

  ":hover": {
    backgroundColor: "#5adb85"
  }
};

const ItemCreator = props => {
  return (
    <button style={buttonStyle} onClick={props.handlePlusClick}>
      +
    </button>
  );
};

export default Radium(ItemCreator);
