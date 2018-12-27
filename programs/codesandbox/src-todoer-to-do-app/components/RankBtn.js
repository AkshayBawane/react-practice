import React from "react";
import Radium from "radium";

const myStyle = direction => ({
  outline: "none",
  borderWidth: "2px 2px 0 0",
  borderColor: "#ddd",
  borderStyle: "solid",
  height: ".9rem",
  width: ".9rem",
  transform: `rotate(${direction === "up" ? -45 : 135}deg)`,
  backgroundColor: "transparent",
  display: "block",
  ":hover": {
    borderColor: "#bbb"
  }
});

const RankBtn = props => {
  return (
    <button
      style={myStyle(props.direction)}
      onClick={_ => props.handleRankUpdate(props.direction)}
    />
  );
};

export default Radium(RankBtn);
