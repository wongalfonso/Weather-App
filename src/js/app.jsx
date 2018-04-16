import React from 'react';
import Form from "./components/Form";
import CityInfo from "./components/cityInfo";
import Search from "./components/search";

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1>Origin Weather Application</h1>
          <h4>Always know if you'll need an umbrella!</h4>
        </div>        
          <Form />              
        <div className = "row cards cardsRow">
          <div className="col-6">
            <CityInfo/>
          </div>
          <div className="col-6">
            <Search/>
          </div>
        </div>
      </div>
    );
  }
}
