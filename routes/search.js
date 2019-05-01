const express = require('express')
const router = express()
const Restaurant = require('../models/restaurant')

//搜尋
router.get('/', (req, res) => {
  const keyword = req.query.keyword
  Restaurant.find({ userId: req.user._id }, (err, restaurants) => {
    if (err) return console.error(err)
    const search = restaurants.filter(restaurant => {
      return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
    })
    res.render('index', { restaurants: search, keyword })
  })
})

module.exports = router