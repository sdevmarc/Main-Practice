const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
    res.json({
        name: "Marc",
        value: "Very Valuable"
    })
})


app.listen(3001, 'localhost', () => {
    console.log('localhost is listening for request on port 3000')
})