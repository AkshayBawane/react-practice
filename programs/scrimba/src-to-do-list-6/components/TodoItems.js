import React from "react";

function TodoItems(props) {
    return(
        <div>
            <div className="to-do-box">
                <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
                />
                <p>{props.item.text}</p>
            </div>
        </div>
    )
}

export default TodoItems