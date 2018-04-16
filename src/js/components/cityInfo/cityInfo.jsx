import React from "react";
import Img from "react-image";

export default class CityInfo extends React.Component {

  renderCitySuccess() {
    const { data } = this.props;
    var weatherArr = data.slice(0, 1);
    return (
      <div>
        {weatherArr.map((weather, i, weatherArr) => {
          var icon = weather.data.weather[0].icon
          return (
            <div className="card-body info-body" key={i}>
              <div className="row iconRow">
                  <div className="col-md-12 text-center iconRow">
                    <h2><Img src={"http://openweathermap.org/img/w/" + icon + ".png"} height={50} width={50} />
                    {weather.data.name}, {weather.data.sys.country}</h2>
                  </div>
                <div className="col-md-12">
                  <span>Lat/Long: {weather.data.coord.lat},{weather.data.coord.lon}</span>
                  <div className="discription">{weather.data.weather[0].description}</div>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-4 text-center info">
                  <label htmlFor="temp"><b>Temperature (F)</b></label>
                  <div id="temp" className="text-success">{weather.data.main.temp}F</div>
                </div>
                <div className="col-4 text-center info">
                  <label htmlFor="temp"><b>Pressure</b></label>
                  <div id="temp" className="text-success">{weather.data.main.pressure}</div>
                </div>
                <div className="col-4 text-center info">
                  <label htmlFor="temp"><b>Humdity</b></label>
                  <div id="temp" className="text-success">{weather.data.main.humidity}</div>
                </div>

              </div>

              <div className="row">
                <div className="col-4 text-center info">
                  <label htmlFor="lowTemp"><b>Lowest Temp(F)</b></label>
                  <div className="lowTemp text-success">{weather.data.main.temp_min}F</div>
                </div>
                <div className="col-4 text-center info">
                  <label htmlFor><b>Highest Temp (F)</b></label>
                  <div className="hiTemp text-success" >{weather.data.main.temp_max}F</div>
                </div>
                <div className="col-4 text-center info">
                  <label htmlFor="wind"><b>Wind Speed</b></label>
                  <div className="wind text-success">{weather.data.wind.speed}mph</div>
                </div>
              </div>
            </div> //div-body     
          )
        })}
      </div>
    )
  }

  renderCityBasic() {
    return (
      <div></div>
    )
  }


  render() {
    const { data, success, throwErr } = this.props;
    return (
      <div className="card mb-3 text-center">
        <div className="card-header">
          City Information
        </div>
        {(success === true) ? this.renderCitySuccess() : this.renderCityBasic()}
        {(throwErr !== true) ? this.renderCityBasic : ""}
      </div>
    )
  }
}