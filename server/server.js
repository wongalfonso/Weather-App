const express = require('express');
const morgan = require('morgan');
const path = require("path");
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static("dist"));


app.get("/weather/:input", (req, res) => {  
  const search = req.params.input;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&APPID=${process.env.API_KEY}`)
    .then(response => {      
      res.send(response.data)
    })
    .catch(err => res.send(err.response.data))
});


module.exports = app;
