import React from "react"


function ContactCard(props) {
    return(
        <div>
            <div className="contact-card">
                <img src={props.defcontact.imgUrl} alt=""/>
                <h4>{props.defcontact.name}</h4>
                <p>Phone: {props.defcontact.phone}</p>
                <p>Email: {props.defcontact.email}</p>
            </div>
        </div>
    )
}
export default ContactCard