// import React from 'react';
// import     ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// ---------- separator ----------
// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App';

// function MyApp() {
//     return (
//         <div>
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//             </ul>
//             <ol>
//                 <li>a</li>
//                 <li>b</li>
//                 <li>c</li>
//             </ol>
//         </div>
//     )
// }

// ReactDOM.render(
//     <div>
//         <App />
//         <MyApp />
//     </div>, document.getElementById('root'));

// ---------- separator ----------

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// function MyInfo() {
//     return(
//         <div>
//             <h2>Akshay</h2>
//             <p>qwerty paragraph.</p>
//             <ul>
//                 <li>Singapore</li>
//                 <li>Malaysia</li>
//                 <li>Maldives</li>
//             </ul>
//         </div>
//     )
// }

// ReactDOM.render(
//     <div>
//         <App/>
//         <MyInfo/>
//     </div>, document.getElementById("root")
// )

import React from "react";
import ReactDOM from "react-dom";

import MyInfo from "./components/MyInfo";
import MyApp from "./components/MyApp";
ReactDOM.render(
    <div>
        <MyInfo/>
        <MyApp/>
    </div>, document.getElementById("root")
)