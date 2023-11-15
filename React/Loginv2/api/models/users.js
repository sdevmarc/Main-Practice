const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

const users = mongoose.model('Users', userSchema)
module.exports = users