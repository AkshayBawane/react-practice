import React from "react";
import Footer from "./Footer";

function MyApp() {
    return(
        <div>
            <nav>
                <h1>from MyApp.js</h1>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
            <Footer />
        </div>
    )
}
export default MyApp