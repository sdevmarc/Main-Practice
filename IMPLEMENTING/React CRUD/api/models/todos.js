const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodosSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()

    }
})

const Todo = mongoose.model('Todo', TodosSchema)

module.exports = Todo