import React from 'react';

export default class Search extends React.Component {

  renderTable(){
    const { searchHistory, throwErr } = this.props;
    var color, history;
    var length = searchHistory.length;
    var searchArr = searchHistory.slice(0,length -1);
    (searchArr.length > 4) ? history = searchArr.slice(0,5) : history = searchArr;
    return(
    <div className='card weatherCard'>
      <div className='card-header weatherCardHeader'>
        Search History
      </div>
      <div className='card-body weatherSearchBody'>
        <table className='table'>
          <tbody>          
            {history.map((history, i) => {
              (i === 1 ||i === 3 || i === 5) ? color = 'table-secondary' : color = 'table'; 
              return(              
              <tr className={color} key={i}>
                <td className='col-md-2 weatherTd'>{history.data.name}</td> 
                <td className = 'weatherTd'>{history.date} {history.time}</td> 
              </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    </div>
    )
  }

  renderBasic(){
    const message = 'No Search Items so Far....'
    return (
    <div className='card weatherCard'>
      <div className='card-header weatherCardHeader'>
        Search History
        </div>
      <div className='card-body '>
        <table className='table table'>
          <tbody>
            <tr><td className = 'weatherTd'><b>{message}</b></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    )
  }

  render() {
    const { searchHistory } = this.props;
    return (
      (searchHistory !== undefined ? this.renderTable() : this.renderBasic())
    )
  }
};