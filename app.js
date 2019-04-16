//require express
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const Restaurant = require('./models/restaurant')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//setting body-parser and method-override
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//setting mongoose
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting static
app.use(express.static('public'))

//home route
app.use('/', require('./routes/home'))

//restaurants routes
app.use('/restaurants', require('./routes/restaurants'))

//search route
app.use('/search', require('./routes/search'))

//start and listen Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})