import React, { Component, PropTypes } from "react";
import {
  getCity,
  updateCitySearch,
  updateInput
} from "./formActions";


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInputButton = this.handleInputButton.bind(this);
    this.getDate = this.getDate.bind(this);
    this.addEnterKey = this.addEnterKey.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.addEnterKey)
  }

  addEnterKey(e) {
    console.log(e.code);
    if (e.code === "Enter") {
      this.handleInputButton();
    }
  }
  getDate(search) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var date = (mm + "/" + dd + "/" + yyyy)

    var hh = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var time = (" " + hh + ":" + min + ":" + sec)
    const { dispatch } = this.props;
    dispatch(getCity(search, date, time))
  }

  handleInput(e) {
    console.log(e.target.value);
    var value = e.target.value
    value = value.toLowerCase();
    const { dispatch } = this.props;
    dispatch(updateInput(value))
  }

  handleInputButton(e) {
    //input Button
    // e.preventDefault();
    const { input } = this.props;
    console.log("input", input);
    this.getDate(input);
  }

  handleClick(e) {
    //Button Clicks
    e.preventDefault();
    var input = e.target.value;
    input = input.toLowerCase();
    const { dispatch } = this.props;
    this.getDate(input);
  }
  renderSuccess() {
    const { data } = this.props;
    var weatherArr = data.slice(0, 1);
    return (
      <div id="errors" className="alert alert-success">
        {weatherArr.map((weather, i) => {
          return (
            <div className="text-center" key={i}>
              {`We found the city...${weather.data.name} in ${weather.data.sys.country}`}
            </div>
          )
        })}
      </div>
    )
  }
  renderWarning() {
    const { input } = this.props;
    return (
      <div id="errors" className="alert alert-danger">
        <div className="text-center">
          {`Please enter a Valid City Name, ${input} is not a valid input`}
        </div>
      </div>
    )
  }

  renderBasic() {
    return (
      <div>
      </div>
    )
  }
  render() {
    const { throwErr, input, success } = this.props;
    return (
      <div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
            value="San Diego"
          >
            San Diego</button>
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
            value="New York"
          >
            New York</button>
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
            value="Washington"
          >
            Washington D.C.</button>
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
            value="London"
          >
            London</button>
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
            value="Tokyo"
          >
            Tokyo</button>
        </div>
        <div className="input-group">
          <input
            className="form-control input"
            onChange={this.handleInput}
            type="text"
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary"
              type="submit"
              onClick = {this.handleInputButton}
            // onKeyPress = {this.handleInputButton}
            // value = {input}
            >
              Go!
            </button>
          </span>

        </div>
        {(throwErr === true) ? this.renderWarning() : this.renderBasic()}
        {(success === true) ? this.renderSuccess() : this.renderBasic()}
        <div>

        </div>
      </div>

    )
  }
}