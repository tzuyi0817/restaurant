const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

module.exports = passport => {
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email }).then(user => {
      if (!user) {
        return done(null, false, { message: '這個email還沒註冊' })
      }

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err
        if (isMatch) {
          return done(null, user)
        } else {
          return done(null, false, { message: 'email或密碼錯誤' })
        }
      })
    })
  }))

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}