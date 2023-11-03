import React from 'react'
import './style.css'

const Contact = ({ thecontact, title }) => {
    return (
        <div className="Contacts">
            <div className="contact">
                {thecontact.map((myContact) => (
                    <div className="details" key={myContact.id}>
                        <h1>{ title }</h1>
                        <div className="to">
                            <b>To: </b>{ myContact.to}
                        </div>
                        <div className="to">
                           <b>From: </b> {myContact.from}
                        </div>
                        <div className="to">
                            <b>Message: </b> {myContact.message}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact