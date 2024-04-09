const mongoose = require('mongoose')
require('dotenv').config()
// const mongodbURL = process.env.DB_URL_LOCAL
const mongodbURL = process.env.DB_URL
mongoose.connect(mongodbURL)

const db = mongoose.connection;

db.on('error',()=>{
    console.log('error while connection with db')
})

db.once('open',()=>{
    console.log('connection with db successfully')
})


module.exports = db;