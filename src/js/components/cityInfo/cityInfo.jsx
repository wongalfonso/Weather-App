import React, { Component } from 'react';
import Img from 'react-image';

export default class CityInfo extends Component {

  renderCitySuccess() {
    const { data } = this.props;
    var weatherArr = data.slice(0, 1);
    return (
      <div>
        {weatherArr.map((weather, i) => {
          var icon = weather.data.weather[0].icon
          return (
            <div className='card-body weatherInfoBody' key={i}>
              <div className='row iconRow'>
                  <div className='col-md-12 text-center iconRow'>
                    <h3><Img src={'http://openweathermap.org/img/w/' + icon + '.png'} height={50} width={50} />
                    {weather.data.name}, {weather.data.sys.country}</h3>
                  </div>
                <div className='col-12'>
                  <div className="row">
                  <div className = 'col-6'>Lat/Long: {weather.data.coord.lat},{weather.data.coord.lon}</div>
                  <div className='col-6 discription'>{weather.data.weather[0].description}</div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className='row'>
                <div className='col-4 text-center weatherInfo'>
                  <label><b>Temperature (F)</b></label>
                  <div id='temp' className='text-success weatherTextSuccess'>{weather.data.main.temp}F</div>
                </div>
                <div className='col-4 text-center weatherInfo'>
                  <label><b>Pressure</b></label>
                  <div id='pressure' className='text-success weatherTextSuccess'>{weather.data.main.pressure}</div>
                </div>
                <div className='col-4 text-center weatherInfo'>
                  <label><b>Humdity</b></label>
                  <div id='humidity' className='text-success weatherTextSuccess'>{weather.data.main.humidity}</div>
                </div>

              </div>

              <div className='row'>
                <div className='col-4 text-center weatherInfo'>
                  <label><b>Lowest Temp(F)</b></label>
                  <div className='lowTemp text-success weatherTextSuccess'>{weather.data.main.temp_min}F</div>
                </div>
                <div className='col-4 text-center weatherInfo'>
                  <label><b> Highest Temp (F)</b></label>
                  <div className='hiTemp text-success weatherTextSuccess' >{weather.data.main.temp_max}F</div>
                </div>
                <div className='col-4 text-center weatherInfo'>
                  <label><b>Wind Speed</b></label>
                  <div className='wind text-success weatherTextSuccess'>{weather.data.wind.speed}mph</div>
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
      <div className='card weatherCard mb-3 text-center'>
        <div className='card-header weatherCardHeader'>
          City Information
        </div>
        {(success === true) ? this.renderCitySuccess() : this.renderCityBasic()}
        {(throwErr !== true) ? this.renderCityBasic() : ''}
        {(throwErr === true) && this.renderCitySuccess()}
      </div>
    )
  }
}