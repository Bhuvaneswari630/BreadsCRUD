require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()
// MIDDLEWARE
app.use(express.static('public'))
// DEPENDENCIES
const methodOverride = require('method-override')

//ask to decode
app.use(express.urlencoded({extended: true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

//controller access
app.use('/breads', require('./controllers/bread_controller'))
app.get('/', (req, res) => {
    res.send('Welcome to Breads');
})
// 404 Page
app.get('*', (req, res) => {
    // res.send('404')
    res.render('Error404')
  })

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})