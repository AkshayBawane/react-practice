import React from "react";
import ReactDOM from "react-dom";

class Tick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.state({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>
          It is {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}

ReactDOM.render(<Tick />, document.getElementById("tick"));
