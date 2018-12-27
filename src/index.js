import React from "react";
import ReactDOM from "react-dom";

import 'aos/dist/aos.css';


import MyInfo from "./components/MyInfo";
import MyApp from "./components/MyApp";
ReactDOM.render(
   <div className="container">
        <MyInfo/>
        <MyApp/>
    </div>, document.getElementById("root")
)