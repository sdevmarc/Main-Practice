const express = require('express')
const app = express()

app.set('view engine', 'ejs')

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







app.listen(3000, () => {
    console.log('listening for request on port 3000')
})