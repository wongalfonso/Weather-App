import axios from "axios"

export function getCity(input, date, time) {

  return {
    type: "GET_WEATHER",
    payload: axios.get(`/weather/${input}`)
      .then(res => {
        return { data: res.data, date, time };
      })
      .catch((err) => {
        dispatch({
          type: "GET_WEATHER_REJECTED",
          payload: { err, input, date, time }
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

