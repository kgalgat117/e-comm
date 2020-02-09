var express = require('express');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

var Models = require('./../models')
var Controller = require('./../controller')

var router = express.Router();

var RetailerModel = Models.Retailer

var Middlewares = Controller.Middleware
var Constants = Controller.Constants

var retailerSignUpDataValidate = Middlewares.retailerSignUpDataValidate

const secretKey = Constants.secretKey

router.post('/signup', retailerSignUpDataValidate, function (req, res) {
  bcrypt.genSalt(10, function (err, salt) {
    if (!err) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        if (!err) {
          let newRetailerData = req.body
          newRetailerData.password = hash
          RetailerModel.create(newRetailerData).then((response) => {
            res.status(200).json({ result: response })
          }, (error) => {
            if (error) {
              res.status(400).json({ error: error })
            } else {
              res.status(400).json({ error: 'something went wrong' })
            }
          })
        } else {
          res.status(400).json({ error: err || 'password hashing error' })
        }
      })
    } else {
      res.status(400).json({ error: err || 'salt generation error' })
    }
  })
})

router.post('/signin', function (req, res) {
  RetailerModel.findOne({ email: req.body.email }).exec(function (err, retailer) {
    if (!err && retailer) {
      bcrypt.compare(req.body.password, retailer.password, function (err, matchResult) {
        if (!err) {
          if (matchResult) {
            let token = jwt.sign({ user: retailer._id }, secretKey, { expiresIn: '2h' })
            res.status(200).json({ result: retailer, token: token })
          } else {
            res.status(400).json({ error: 'incorrect password' })
          }
        } else {
          res.status(400).json({ error: err || 'something went wrong while comparing' })
        }
      })
    } else {
      res.status(400).json({ error: err || 'user not found' })
    }
  })
})

module.exports = router;