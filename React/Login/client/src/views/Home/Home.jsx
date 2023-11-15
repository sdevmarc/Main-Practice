import React, { useState, useEffect } from 'react'
import './styles.css'
import Header from '../Header/Header'

const Home = () => {
    const [name, setName] = useState(null)
    return (
        <div className="App">
            <Header />
            <div className="form">
                <form action="">
                    <div className="input">
                        <input type="text" placeholder='Username' required />
                    </div>
                    <div className="input">
                        <input type="password" placeholder='password' required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Home