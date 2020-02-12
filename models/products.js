var mongoose = require('mongoose');
var DB = require('./../config/db');

var newSchema = new mongoose.Schema({
    name: {type: String},
    image: {type: String},
    description: {type: String},
    quantity: {type: Number},
    category: {type: String},
    
})