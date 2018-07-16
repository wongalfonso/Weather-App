import React from 'react';
import Form from "./components/Form";
import CityInfo from "./components/cityInfo";
import Search from "./components/search";
import '../css/style.less';

export default class WeatherApp extends React.Component {
  render() {
    return (
      <div id="weatherProject">
        <div className='container weatherContainer'>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12" id = 'weatherHeader'>
                  <h1 id = 'weatherH4'>Weather Application</h1>                  
                </div>
              </div>
              <div className="row">
                <Form />
              </div>
              <div className="row weatherCardsRow">
                <div className="col-6">
                  <CityInfo />
                </div>
                <div className="col-6">
                  <Search />
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}
