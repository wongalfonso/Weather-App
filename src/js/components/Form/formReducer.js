const defaultState = {
  loading: false,
  loaded: false,
  date: "",
  time: "",
  input: "",
  cityInput: "",
  throwErr: false,
  success: false,
  data: [{data: {name: "Search A City...",coord: { lat: "", lon: "" },weather: { 0: { description: "", image: ""} },main: { temp: "", pressure: "", humidity: "", temp_min: "", temp_max: "" },wind: { speed: "" },sys: {country: ""},date: "",time: ""}}],
  errors: [],
  citySearch: []
};

export default function FormReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_WEATHER_PENDING": {
      return {
        ...state,
        loading: true,
        throwErr: false,
      };
      break;
    }

    case "GET_WEATHER_FULFILLED": {
      return {
        data: [
          {
            data: payload.data,
            date: payload.date,
            time: payload.time
          },
          ...state.data,
        ],
        loading: false,
        success: true,
        throwErr: false,
      }
      break;
    }
    case "GET_WEATHER_ERROR": {
      return {
        data: [
          {error: payload.err, date: payload.date, time: payload.time, data: {name: payload.search}},
          ...state.data
        ],
        throwErr: true
      };
      break;
    }

    case "UPDATE_INPUT": {
      return { ...state, input: payload.input, 
      };
      break;
    }
    default: {
      return state;
    }
  }
} 