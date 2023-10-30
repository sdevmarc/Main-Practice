const express = require('express')
const mongoose = require('mongoose')
const users = require('./models/users')

const app = express()


//Connection to DB
const dbUri = 'mongodb+srv://rouge:1234@nodetest.v2dek1u.mongodb.net/thisistest?retryWrites=true&w=majority'
mongoose.connect(dbUri)
    .then((result) => {
        console.log('Connected to db!')
        app.listen(3000)
    })
    .catch((err) => {
        console.log(`Error: ${err}`)
    })
//Connection to DB

//Mongoose INSERT / CREATE
app.get('/add', (req, res) => {
    const Users = new users({
        username: 'taylor',
        password: 'taylor',
        message: 'This is the taylor'
    })

    Users.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(`Insertion Error: ${err}`)
        })
})
//Mongoose INSERT

//Mongoose SELECT ALL
app.get('/all', (req, res) => {
    users.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})
//Mongoose SELECT ALL


//Mongoose RETRIEVE DATA
app.get('/single', (req, res) => {
    users.findById('653fddfef43a943ec9d28a8c')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

//Mongoose RETRIEVE DATA


app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname })
})

app.get('/about-me', (req, res) => {
    res.redirect('/about', { root: __dirname })
})

app.use((req, res) => {
    res
        .status(404)
        .sendFile('./404.html', { root: __dirname })
})
