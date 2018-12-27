import React from "react";

const styles = theme => ({
  div: {
    backgroundColor: theme,
    width: "100%",
    height: "3.5rem"
  },
  h3: {
    display: "inline-block",
    margin: "1rem",
    marginLeft: "1.7rem"
  }
});

const Divider = props => {
  return (
    <div style={styles(props.theme).div}>
      <h3 style={styles(props.theme).h3}>{props.children}</h3>
    </div>
  );
};

export default Divider;
