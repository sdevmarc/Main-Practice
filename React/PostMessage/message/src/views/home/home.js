import { React, useState, useEffect } from 'react'
import './style.css'
const Home = () => {
    return (
        <div className="Home">
            <div className="contact">
                <form action='/dashboard' method='get'>
                    <label htmlFor="to">To</label>
                    <input id='to' type="text" placeholder='To:'  />
                    <label htmlFor="from">From</label>
                    <input id='from' type="text" placeholder='From:' />
                    <label htmlFor="message">Message</label>
                    <textarea id='message' type="text" placeholder='Start typing...' />
                    <button type="submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home