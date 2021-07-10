'use strict';

const axios = require('axios')
require('dotenv').config()

function Location (req, res){

    let locationData;

    let searchQuery = req.query.searchQuery

    let URL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_API_KEY}&q=${searchQuery}&format=json`

    axios.get(URL).then(response => {
        locationData = response.data
        let locationArr = locationData.map((item, idx) => {
            return new LocationClass(item)
        })
        res.json(locationArr[0])
    })
    .catch(error => {
        res.send(error)
    })
}


class LocationClass{
    constructor(allData){
        this.display_name = allData.display_name,
        this.lat = allData.lat,
        this.lon = allData.lon
    }
}

module.exports = Location