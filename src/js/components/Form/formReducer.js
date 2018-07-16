const defaultState = {
  loading: false,
  loaded: false,
  date: "",
  time: "",
  input: "",
  cityInput: "",
  throwErr: false,
  success: false,
  data: [{
    data: {
      name: "Search A City...",
      coord: { 
        lat: "", lon: "" 
    },
    weather: { 
      0: { 
        description: "", 
        icon: ""
      } 
    },
    main: { 
      temp: "", pressure: "", humidity: "", temp_min: "", temp_max: "" },
      wind: { speed: "" },
      sys: {country: ""},
    }
  }],
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
    }

    case "GET_WEATHER_FULFILLED": {
      if (payload.data.cod === 200) {
        return {
          data: [
            {
              data: payload.data,
              date: payload.date,
              time: payload.time
            },
            ...state.data,
          ],
          input: payload.input,
          loading: false,
          success: true,
          throwErr: false,
        }
      }
    }
    case "GET_WEATHER_REJECTED": {  
      return {
        data: [{
          data: {
            name: payload.input,
            coord: { 
              lat: "82.8628", lon: "135.0000" 
            },
            weather: { 
            0: { 
              description: "maybe you mispelled the city name", 
              icon: "13n"
            } 
          },
          main: { 
            temp: "-1000", pressure: "0", humidity: "0", temp_min: "-2000", temp_max: "-99" },
            wind: { speed: "99" },
            sys: {country: "Its Own Country"},
          },
            date: payload.date,
            time: payload.time
          },
          ...state.data,
        ],
        input: payload.input,
        loading: false,
        success: false,
        throwErr: true,
      };
    }

    case "UPDATE_INPUT": {
      return { ...state, input: payload.input, 
      };
    }
    default: {
      return state;
    }
  }
} 