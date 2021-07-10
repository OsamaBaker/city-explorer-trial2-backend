'use strict'

const express = require('express')
const server = express();
const axios = require('axios')
require('dotenv').config()
const cors = require('cors')

server.use(cors())

const location = require('./modules/location')
const weather = require('./modules/weather')
const movies = require('./modules/movies')

const PORT = 3001;


server.get('/', main);
server.get('/location', location)
server.get('/weather', weather)
server.get('/movies', movies)






function main (req,res){
    res.send('Working')
}










server.listen(PORT, () =>
console.log(`Listening on PORT ${PORT}`))