const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        name: "Jason",
        food: "Rice"
    })
})

app.listen(3000, 'localhost', () => {
    console.log('localhost is listening for request on port 3000')
})