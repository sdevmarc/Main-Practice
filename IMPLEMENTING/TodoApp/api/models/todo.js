const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    name: {
        type: String,
    }
}, {
    timestamps: true
})

const todo = mongoose.model('newCollection', todoSchema)
module.exports = todo

