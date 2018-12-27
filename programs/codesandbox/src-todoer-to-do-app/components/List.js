import React from "react";
import Item from "./Item";

const myStyle = {
  listStyleType: "none",
  padding: ".5rem"
};

const List = props => {
  const items = props.tasks.map(a => {
    return (
      <Item
        self={a}
        key={a.id}
        checked={props.itemsChecked}
        handleDeleteItem={_ => props.handleDeleteItem(a)}
        handleCheckClick={_ => props.handleCheckClick(a)}
        handleRankUpdate={(dir, item) => props.handleRankUpdate(dir, item)}
      />
    );
  });

  return <ul style={myStyle}>{items}</ul>;
};

export default List;
