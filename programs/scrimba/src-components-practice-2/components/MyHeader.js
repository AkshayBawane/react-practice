import React from "react"
import './MyHeader.css'

function MyHeader() {
    const firstName = "Akshay"
    const lastName = "Bawane"
    return(
        <div>
            <h2>from Header</h2>
            <h3>es5 Hello {firstName + " " + lastName}</h3>
            <h3>es6 Hello {`${firstName} dummy separator text ${lastName}`}</h3>
            <header className="header-outer">
                <nav className="navbar">
                    <ul>
                        <li>link 1</li>
                        <li>link 2</li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

// By Using ArrowFunction
// const MyHeader = () =>
//         <div>
//             <h2>from Header</h2>
//             <header className="header-outer">
//                 <nav className="navbar">
//                     <ul>
//                         <li>link 1</li>
//                         <li>link 2</li>
//                     </ul>
//                 </nav>
//             </header>
//         </div>

export default MyHeader