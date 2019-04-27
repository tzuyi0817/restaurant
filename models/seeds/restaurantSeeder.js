const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const bcrypt = require('bcryptjs')
const restaurantList = require('../../restaurant.json').results
const User = require('../user')
const users = require('../../users.json').results

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useCreateIndex: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')

  for (let i = 0; i < users.length; i++) {
    const user = User(users[i])
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash
        user.save()
          .then()
          .catch(err => console.log(err))
      })
    })

    for (let restaurant = i * 3; restaurant < (i + 1) * 3; restaurant++) {
      Restaurant.create({ ...restaurantList[restaurant], userId: user._id })
      if (restaurant === restaurantList.length) return
    }
  }

  console.log('done')
})

