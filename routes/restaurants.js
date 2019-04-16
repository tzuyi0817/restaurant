const express = require('express')
const router = express()
const Restaurant = require('../models/restaurant')

//新增一筆資料頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

//新增一筆資料
router.post('/', (req, res) => {
  const restaurant = Restaurant(req.body)

  restaurant.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

//顯示詳細內容
router.get('/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('show', { restaurant })
  })
})

//修改資料頁面
router.get('/:id/edit', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('edit', { restaurant })
  })
})

//修改資料
router.put('/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    Object.assign(restaurant, req.body)

    restaurant.save(err => {
      if (err) return console.error(err)
      return res.redirect(`/restaurants/${req.params.id}`)
    })
  })
})

//刪除資料
router.delete('/:id/delete', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)

    restaurant.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router