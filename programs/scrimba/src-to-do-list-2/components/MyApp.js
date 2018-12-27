import React from "react";
import TodoItems from "./TodoItems";

import Footer from "./Footer";
import "./MyApp.css";

function MyApp() {
    return(
        <div>
            <h2>from MyApp.js</h2>
            <TodoItems/>
            <TodoItems/>
            <TodoItems/>
            <TodoItems/>
            <Footer />{/* to display footer.js */}
        </div>
    )
}
export default MyApp