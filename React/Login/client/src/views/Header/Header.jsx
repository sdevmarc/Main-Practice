import React from 'react'
import './styles.css'

const Header = () => {
    return (
        <div className="Header">
            <header>
                <div className="logo">
                    Marc.
                </div>
                <div className="navs">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                </div>
            </header>
        </div>
    )
}

export default Header