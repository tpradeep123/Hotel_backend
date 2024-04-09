const express = require('express');
const db = require('./db')
const PersonModel = require('./models/Person')
const MenuModel = require('./models/Menu')
const bodyParser = require('body-parser')
require('dotenv').config()
const PORT = process.env.PORT || 2000

const app = express()

app.use(bodyParser.json())    // it convert upcoming data into a js object it convert any data format to the js object.
app.get('/',(req,res)=>{
    res.send('heelllo...')
})



const menuRoutes = require('./routes/menuRoutes')
app.use('/menu',menuRoutes)

const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)

app.listen(2000,()=>{
    console.log('server is connected...')
})