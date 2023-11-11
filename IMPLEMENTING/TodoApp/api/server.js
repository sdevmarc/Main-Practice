const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Todo = require('./models/todo')

const test = require('./models/test.json')

app.use(express.json())
app.use(cors())

const dbTodo = 'mongodb://localhost:27017/mern-todo'
mongoose.connect(dbTodo)
    .then(() => {
        console.log('connected to db!')
    })

app.get('/', (req, res) => {
    Todo.find()
        .sort({ createdAt: -1 })
        .then(result => res.json(result))
})

app.get('/todos', async () => {
    const result1 = await Todo.findOne({
        name: "sheesh"
    })

    if (result1) {
        console.log('Result 1 Exist')
        const result2 = await Todo.findOne({
            name: "Marc"
        })
        if (result2) {
            console.log(`Result 2 exist ${result2.name}`)
            res.json(result2)
        } else {
            console.log('Result 2 Not Exist')
        }
    } else {
        console.log('Result 1 Not Exist')
    }
})

app.post('/new', (req, res) => {
    const data = new Todo({
        name: req.body.name
    })
    data.save()
    res.json(data)
})


app.listen(3001, () => console.log('listening for requst in port 3001'))