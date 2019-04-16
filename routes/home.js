const express = require('express')
const router = express()
const Restaurant = require('../models/restaurant')

//routes setting
router.get('/', (req, res) => {
  Restaurant.find((err, restaurants) => {
    if (err) return console.error(err)
    return res.render('index', { restaurants })
  })
})

module.exports = router