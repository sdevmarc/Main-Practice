import { React, useState, useEffect } from 'react'
import Contact from '../contacts/contact'

const Dashboard = () => {
    const [contact, setContact] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/contact')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setContact(data)
            })
    }, [])



    return (
        <div className="dashboard">
            {contact && <Contact thecontact={contact} title="Message" />}
        </div>
    )
}

export default Dashboard