const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
const dr = 'mongodb://localhost:27017/test'
mongoose.connect(dr)
    .then((result) => {
        console.log('Connected to db!')
        app.listen(3001, () => {
            console.log('listening for request on port 3001')
        })
    })
    .catch(err => console.log(`Error: ${err}`))


const model_users = require('./models/users')

app.get('/', (req, res) => {
    model_users.find()
        .sort({ createdAt: -1 })
        .then(result => res.json(result))
        .catch(err => `ERROR: ${err}`)
})

app.post('/new', (req, res) => {
    const data = new model_users({
        message: req.body.message
    })
    data.save()
    res.json(data)
})

