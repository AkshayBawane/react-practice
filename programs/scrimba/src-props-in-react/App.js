import React from 'react';
import './App.css';
import ContactCard from './ContactCard';


function App() {
    return(
        <div>
            <h2>Props in React example</h2>
            <ContactCard
                defcontact={{name:"Akshay Bawane",
                imgUrl:"https://source.unsplash.com/200x150/?office",
                phone:"9960365501",
                email:"akshay123@gmail.com"}}
            />
            <ContactCard
                defcontact={{name:"abc Bawane",
                imgUrl:"https://source.unsplash.com/200x150/?table",
                phone:"9960365502",
                email:"akshay234@gmail.com"}}
            />
            <ContactCard
                defcontact={{name:"pqr Bawane",
                imgUrl:"https://source.unsplash.com/200x150/?shoes",
                phone:"9960365503",
                email:"akshay345@gmail.com"}}
            />
            <ContactCard
                defcontact={{name:"xyz Bawane",
                imgUrl:"https://source.unsplash.com/200x150/?light",
                phone:"9960365504",
                email:"akshay456@gmail.com"}}
            />
        </div>
    )
}

export default App;
