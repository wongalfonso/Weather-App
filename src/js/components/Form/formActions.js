import axios from "axios"

export function getCity(search, date, time) {
  var url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&APPID=${process.env.API_KEY}`;
  return (dispatch) => {
    dispatch({
      type: "GET_WEATHER_PENDING"
    })
    axios.get(url)
    .then((res) => {
      dispatch({
        type: "GET_WEATHER_FULFILLED",
        payload: { data: res.data, date, time }
      })
    })
    .catch((err) => {
      dispatch({
        type: "GET_WEATHER_ERROR",
        payload: { err, search, date, time }
      })
    })
  }
}  

export function updateInput(input) {
  return {
    type: "UPDATE_INPUT",
    payload: { input }
  }
}

// export function getWeatherSuccess(data) {
//   // var prefix = 'wi wi-';
//   // var code = response.weather[0].id;
//   // var icon = weatherIcons[code].icon;
//   // if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
//   //   icon = 'day-' + icon;
//   // }
//   //   icon = prefix + icon;
  

 