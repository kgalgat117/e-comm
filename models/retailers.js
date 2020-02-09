var mongoose = require('mongoose')
var DB = require('./../config/db')

var newSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: Number },
    address: {
        type: {
            line1: String,
            city: String,
            state: String,
            country: String
        }
    },
    pan: {
        type: String
    },
    company: {
        type: {
            name: String,
            address: {
                line1: String,
                city: String,
                state: String,
                country: String
            },
            gstin: String,
            pan: String
        }
    }
}, { timestamps: true })

module.exports = DB.model('retailers', newSchema)