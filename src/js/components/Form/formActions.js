import axios from "axios"

export function getCity(input, date, time) {
  const city = input.toLowerCase();
  return (dispatch) => {
    dispatch({
      type: 'GET_WEATHER',
      payload: axios.get(`/weather/${city}`)
        .then(res => {
          return { data: res.data, date, time, input };
        })
    })
  }
}

