import React from "react";
import Radium from "radium";
import RankBtn from "./RankBtn";
import EditableText from "./EditableText";

const styles = {
  li: {
    border: "#ddd 1px solid",
    padding: ".7rem",
    position: "relative"
  },
  checkbox: {
    border: "1.5px #aaa solid",
    borderRadius: "10%",
    height: ".7rem",
    width: ".7rem",
    display: "inline-block",
    marginRight: "1rem",
    position: "absolute",
    top: "calc(50% - .45rem)"
  },
  checkmark: {
    width: ".3rem",
    height: ".7rem",
    transform: "rotate(45deg) translateY(-.4rem)",
    borderColor: "#5adb85",
    borderWidth: "0 2px 2px 0",
    borderStyle: "solid"
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    position: "absolute",
    top: "calc(50% - .7rem)",
    right: "1rem",
    ":hover": {
      color: "#bbb"
    }
  },
  buttonDiv: {
    display: "inline-block",
    width: "2rem",
    height: "100%",
    position: "absolute",
    top: "calc(50% - .85rem)"
  }
};

const liCheckStyle = Object.assign({}, styles.li);
liCheckStyle.color = "#bbb";
liCheckStyle.textDecoration = "line-through";

const Item = props => {
  return (
    <li style={props.checked ? liCheckStyle : styles.li}>
      <div style={styles.checkbox} onClick={props.handleCheckClick}>
        {props.checked && <div style={styles.checkmark} />}
      </div>
      <EditableText text={props.self.title} />
      {!props.checked && (
        <div style={styles.buttonDiv}>
          <RankBtn
            direction={"up"}
            handleRankUpdate={dir => props.handleRankUpdate(dir, props.self)}
          />
          <RankBtn
            direction={"down"}
            handleRankUpdate={dir => props.handleRankUpdate(dir, props.self)}
          />
        </div>
      )}
      <button style={styles.button} onClick={props.handleDeleteItem}>
        x
      </button>
    </li>
  );
};

export default Radium(Item);
