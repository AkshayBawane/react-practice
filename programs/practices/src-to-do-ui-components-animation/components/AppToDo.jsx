import React from "react";
import {
    Button
} from 'react-bootstrap';

class AppToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h2>AppToDo.jsx </h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Add items ?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        {/* Add #{this.state.items.length + 1} */}
                        Add Item
                    </button>
                </form>
                <TodoList items={this.state.items} onDelete={this.deleteList}/>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    deleteList = (item, index) => {
        console.log(item);
        let data = this.state.items;
        data.splice(index, 1)
        this.setState({items:data})
    }

    handleSubmit(e) {
        e.preventDefault();
            if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    
    render() {
        return (
        <ul>
            {
                this.props.items.map((item,index) => {
                    return (
                        <div>
                            <li key={item.id}>{item.text}</li>
                            <Button onClick={(e) => {this.props.onDelete(item, index)}} value={index}>Delete</Button>
                        </div>
                    );
                }
            )}
        </ul>
        );
    }
}

export default AppToDo