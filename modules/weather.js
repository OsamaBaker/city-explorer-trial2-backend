'use strict'

const axios = require('axios')
require('dotenv').config()

function Weather (req,res){

    let weatherInfo;

    let searchQuery = req.query.searchQuery;

    let URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQuery}&key=${process.env.WEATHERBIT_API_KEY}`

    axios.get(URL).then(response => {
        weatherInfo = response.data.data
        let weatherArr = weatherInfo.map((item,idx) => {
            return new WeatherClass(item)
        })
        res.json(weatherArr)
    })
    .catch(error => {
        res.send(error)
    })

}


class WeatherClass{
    constructor(allData){
        this.valid_date = allData.valid_date
        this.description = allData.weather.description
    }
}


module.exports = Weather