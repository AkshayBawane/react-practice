import React from "react"
import TodoItems from "./TodoItems.jsx"

function MyBody() {
    return(
        <div>
            <h2>from Body</h2>
            <TodoItems/>
            <TodoItems/>
            <TodoItems/>
            <TodoItems/>
        </div>
    )
}

export default MyBody;