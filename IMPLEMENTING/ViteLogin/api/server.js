const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require('./models/users')

app.use(express.json())
app.use(cors())

//Connection to DB
const dbUri = 'mongodb+srv://rouge:1234@nodetest.v2dek1u.mongodb.net/Login?retryWrites=true&w=majority'
mongoose.connect(dbUri)
    .then((result) => {
        console.log('Connected to db!')
        app.listen(3004, () => {
            console.log('listening for request on port 3004')
        })
    })
    .catch((err) => {
        console.log(`Error: ${err}`)
    })
//Connection to DB
// mongoose.connect('mongodb://localhost:27017/sis')

app.post('/login', (req, res) => {
    const {username, password} = req.body
    UsersModel.findOne({username: username})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json('Success')
            } else {
                res.json('The password is incorrect')
            }
        } else {
            res.json('No record existed')
        }
    })
})

app.post('/signin', (req, res) => {
    UsersModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


