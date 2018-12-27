import React from "react";

function TodoItems(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return(
        <div>
            <div className="to-do-box">
                <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
                />
                <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
            </div>
        </div>
    )
}

export default TodoItems