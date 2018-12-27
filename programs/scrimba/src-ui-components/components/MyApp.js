import React from "react";
import TodoItems from "./TodoItems";
import todoData from "./todoData";

import Footer from "./Footer";
import "./MyApp.css";
import {
    Alert,
    Button,
    ButtonGroup,
    DropdownButton,
    MenuItem,
    Carousel
} from 'react-bootstrap'


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
                <div className="container">
                    <ButtonGroup style={{marginBottom:'15px'}}>
                        <Button>1</Button>
                        <Button>2</Button>
                        <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                            <MenuItem eventKey="1">Dropdown link</MenuItem>
                            <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>
                    <br/>

                    <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>

                    <Carousel style={{marginTop:'15px'}}>
                        <Carousel.Item>
                            <img alt="900x500" src="https://source.unsplash.com/1140x500/?office" />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="900x500" src="https://source.unsplash.com/1140x500/?window" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="900x500" src="https://source.unsplash.com/1140x500/?laptop" />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <Footer />
                    <AlertDismissable />
                </div>
            </div>
        )
    }
}
class AlertDismissable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
      return (
        <Alert bsStyle="info" onDismiss={this.handleDismiss}>
          <h4>Oh snap! You got an error!</h4>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
          <p>
            <Button bsStyle="danger">Take this action</Button>
            {/* <button className="btn-danger">qwerty</button> */}
            <span> or </span>
            <Button onClick={this.handleDismiss}>Hide Alert</Button>
          </p>
        </Alert>
      );
    }

    return <Button onClick={this.handleShow}>Show Alert</Button>;
  }
}
export default MyApp