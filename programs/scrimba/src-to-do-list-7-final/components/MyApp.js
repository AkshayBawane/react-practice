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
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        // console.log("changed", id)
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item =>
            <TodoItems
            key={item.id}
            item={item}
            handleChange={this.handleChange}
            />)
        return(
            <div>
                <h2>from MyApp.js inherited from index.js</h2>
                {todoItems}
                <Footer />{/* to display footer.js */}
            </div>
        )
    }
}
export default MyApp