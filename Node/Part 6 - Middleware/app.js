const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const users = require('./model/users')

app.set('view engine', 'ejs')


//Connection to DB
const dbUri = 'mongodb+srv://rouge:1234@nodetest.v2dek1u.mongodb.net/thisistest?retryWrites=true&w=majority'
mongoose.connect(dbUri)
    .then((result) => {
        console.log('Connected to db!')
        app.listen(3000, () => {
            console.log('listening for request on port 3000')
        })
    })
    .catch((err) => {
        console.log(`Error: ${err}`)
    })
//Connection to DB

//   MIDDLEWARE
// app.use((req, res, next) => {
//     console.log('New request has been made')
//     console.log('Host', req.hostname)
//     console.log('Path', req.path)
//     console.log('Method', req.method)
//     next()
// })
//   Middleware

//Static Files for css for example, to access the files

app.use(express.static('public'))

//Static Files for css for example, to access the files

//Third Party Middleware

app.use(morgan('dev'))  //dev or tiny or just vist the home page of morgan in npm

//Third Party Middleware

//Mongoose INSERT / CREATE
app.get('/add', (req, res) => {
    const Users = new users({
        username: 'Mongoose',
        password: 'taylor',
        message: 'With middleware'
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


//ROUTES
app.get('/', (req, res) => {
    const content = [
        {
            btitle: 'This is the Content',
            message: 'Hello'
        }
    ]

    res.render('index', { title: 'Home', content })
})


app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {
    res.status(404)
        .render('404', { title: 'ERROR' })
})
