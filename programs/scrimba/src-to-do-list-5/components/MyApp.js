import React from "react";
import TodoItems from "./TodoItems";
import todoData from "./todoData";

import Footer from "./Footer";
import "./MyApp.css";


class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItems key={item.id} item={item}/>)
        return(
            <div>
                <h2>from MyApp.js</h2>
                {todoItems}
                <Footer />{/* to display footer.js */}
            </div>
        )
    }
}
export default MyApp