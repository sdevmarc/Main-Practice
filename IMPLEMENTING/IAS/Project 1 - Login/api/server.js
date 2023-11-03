const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    const data = console.log('I am running!')
    res.send(data)
})


app.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})