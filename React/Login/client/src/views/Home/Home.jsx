import React, { useState, useEffect } from 'react'

const Home = () => {
    const [name, setName] = useState(null)
    return (
        <div className="App">
            <form action="http://localhost:3000" method="get">
            <input type="text" required/>
            <button type='submit'>
                Submit
            </button>
            </form>
            
        </div>
    )
}

export default Home