const express = require('express');
const morgan = require('morgan');
const path = require("path");
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.static("dist"));
app.use(express.static('public'));

app.get("weather", (req,res) => {
  console.log("hello");
  res.staus(200).send("yass");
})

app.get("/weather/:input", (req, res) => {
  console.log(req.params.input);
  const key = process.env.API_KEY;
  const search = req.params.input;
  console.log(search);
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&APPID=${key}`)
    .then(response => res.send(response.data));
})


module.exports = app;
