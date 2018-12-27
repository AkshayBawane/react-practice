import React from "react";
import ReactDOM from "react-dom";

function tick() {
  const elem = (
    <div>
      <h1>Hello, World!</h1>
      <h2>
        It is {new Date().toLocaleTimeString()}.
      </h2>
    </div>
  );
}

ReactDOM.render(<tick />, document.getElementById("tick"));

setInterval(tick, 1000);
