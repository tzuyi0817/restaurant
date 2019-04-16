const express = require('express')
const router = express()
const Restaurant = require('../models/restaurant')

//評分排序
router.get('/rating', (req, res) => {
  Restaurant.find({})
    .sort({ rating: 'desc' })
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', { restaurants })
    })
})

//類別排序
router.get('/category', (req, res) => {
  Restaurant.find({})
    .sort({ category: 'asc' })
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', { restaurants })
    })
})

//A > Z 排序
router.get('/asc', (req, res) => {
  Restaurant.find({})
    .sort({ name: 'asc' })
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', { restaurants })
    })
})

//Z > A排序
router.get('/desc', (req, res) => {
  Restaurant.find({})
    .sort({ name: 'desc' })
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', { restaurants })
    })
})


module.exports = router