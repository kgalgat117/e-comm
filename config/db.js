var mongoose = require('mongoose');

console.log(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`)

let DB = mongoose.createConnection(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true, useUnifiedTopology: true});

DB.on('connected', function(){
    console.log('connected to db')
})

module.exports = DB;