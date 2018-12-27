import React, {Component} from "react";
import Footer from "./Footer";



class MyApp extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                character: data
            })
        })
    }
    render() {
        const text = this.state.loading ? "fetching data from api..." : this.state.character.name
        return(
            <div>
                <p style={{color: "red", fontSize: "40px"}}>{text}</p>
                <Footer />{/* to display footer.js */}
            </div>
        )

    }
}
export default MyApp