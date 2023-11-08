require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// Constants
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI;


// MIDDLEWARE
app.use(express.static('public'))
// DEPENDENCIES
const methodOverride = require('method-override')

//Middleware
app.use(express.urlencoded({extended: true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

//controller access
app.use('/breads', require('./controllers/bread_controller'))
app.use('/bakers', require('./controllers/baker_controller'))

app.get('/', (req, res) => {
    res.send('Welcome to Breads');
})
// 404 Page
app.get('*', (req, res) => {
    // res.send('404')
    res.render('Error404')
  })


const start = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Connected to MongoDb');
    } catch (e) {
        console.log('MongoDb not connected');
    }
}

start()

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})
