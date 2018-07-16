import React, { Component } from 'react';
import { getCity } from './formActions';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInputButton = this.handleInputButton.bind(this);
    this.getDate = this.getDate.bind(this);
    this.addEnterKey = this.addEnterKey.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.addEnterKey)
  }

  addEnterKey(e) {
    if (e.code === 'Enter') {
      this.handleInputButton();
    }
  }
  getDate(search) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var date = (mm + '/' + dd + '/' + yyyy)

    var hh = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var time = (' ' + hh + ':' + min + ':' + sec)
    const { dispatch } = this.props;
    dispatch(getCity(search, date, time));
    this.setState({input: ''});
  }

  handleInput(e) {
    this.setState({input: e.target.value})
  }

  handleInputButton() {
    const { input } = this.state;    
    this.getDate(input);
  }

  handleClick(e) {    
    e.preventDefault();
    var input = e.target.value;
    input = input.toLowerCase();
    this.getDate(input);
  }
  renderSuccess() {
    const { data } = this.props;
    var weatherArr = data.slice(0, 1);
    if (weatherArr[0].data.cod === 200) {
      return (
        <div id='feedbackSuccess' className='alert alert-success col-12'>
        {weatherArr.map((weather, i) => {
          return (
            <div className='text-center' key={i}>
              {`We found the city...${weather.data.name} in ${weather.data.sys.country}`}
            </div>
          )
        })}
      </div>
      )
    } 
    if (weatherArr[0].data.cod === undefined) {
      return (
        <div></div>
      )
    }
  }
  renderWarning() {
    const { input } = this.props;
    return (
      <div id='feedbackError' className='alert alert-danger col-12 warnings'>
        <div className='text-center'>
          {`Please enter a Valid City Name, ${input} is not a valid input`}
        </div>
      </div>
    )
  }

  // renderBasic() {
  //   return (
  //     <div id = 'feedback' className = 'col-12 warnings'>
  //     </div>
  //   )
  // }
  render() {
    const { throwErr, input, success } = this.props;
    return (
      <div className = 'col-12'>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <button className='btn btn-primary' onClick={this.handleClick} value='San Diego'>
            San Diego</button>
          <button className='btn btn-primary' onClick={this.handleClick} value='New York'>
            New York</button>
          <button className='btn btn-primary' onClick={this.handleClick} value='Washington'>
            Washington D.C.</button>
          <button className='btn btn-primary' onClick={this.handleClick} value='London' >
            London</button>
          <button className='btn btn-primary' onClick={this.handleClick} value='Tokyo'>
            Tokyo</button>
        </div>
        <div className='input-group'>
          <input className='form-control input' onChange={this.handleInput} value = {this.state.input}type='text'/>
          <span className='input-group-btn'>
            {(this.state.input.length > 2 ) ? <button className='btn btn-secondary' type='submit' onClick = {this.handleInputButton}>
              Go!
            </button> : <button className='btn btn-secondary' type='submit' onClick = {this.handleInputButton} disabled>
              Go!
            </button>}
          </span>
        </div>
        {(throwErr === true) ? this.renderWarning() : this.renderSuccess()}        
        <div>

        </div>
      </div>
    )
  }
}
