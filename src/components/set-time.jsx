// import React, {Component} from 'react';
var React = require('react');
class SetTime extends React.Component{
// class SetTime extends Component{

  retrieveTime(event){
    // alert("The SetTimer button was pressed!");
    this.props.onSet(document.getElementById("set_time").value);
  }

  render(){
    return(
      <div className="setTime">
        <h2 className="subtitle">Set to <input id="set_time" type="number" placeholder="e.g. 45"/> minute(s)</h2>
        <button id="set_time_btn" className="btn" onClick={this.retrieveTime.bind(this)}>Set Timer (min)</button>
      </div>
    )
  }
}

module.exports = SetTime;
