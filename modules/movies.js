'use strict'

const axios = require('axios')
require('dotenv').config()

function Movies (req,res) {
    let MovieData;

    let searchQuery = req.query.searchQuery;

    let URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`

    axios.get(URL).then(response => {
        MovieData = response.data.results
        let MovieArr = MovieData.map((item,idx) => {
            return new MovieClass(item)
        })
        res.json(MovieArr)
    })
    .catch(error => {
        res.send(error)
    })
}

class MovieClass {
    constructor(allData){
        this.title = allData.title,
        this.poster_path = `https://image.tmdb.org/t/p/w500` + allData.poster_path,
        this.vote_average = allData.vote_average
    }
}

module.exports = Movies