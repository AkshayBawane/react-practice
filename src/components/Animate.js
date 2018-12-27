import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Animation extends Component {
//   constructor(props){
//     super(props);
//   }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render(){
    return(
      <div data-aos='fade-up'>
        <h1>Helloooo!</h1>
      </div>
    )
  }
};

export default Animation;