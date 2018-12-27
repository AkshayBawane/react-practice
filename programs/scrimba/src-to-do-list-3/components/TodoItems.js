import React from "react";

function TodoItems(props) {
    return(
        <div>
            <div className="to-do-box">
                <input type="checkbox" />
                <p>{props.item.text}</p>
            </div>
        </div>
    )
}

export default TodoItems