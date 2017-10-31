// import React, {Component} from 'react';
var React = require('react');

class Picture extends React.Component{
// class Picture extends Component{

  render(){
    return(
      <div id="picture" className="picture">
        <img src={this.props.img} alt="PomodoroPhoto Here!"/>
        <h1 id="minutes" className="minutes">
        {this.props.timeElapsedMin < 10 ? "0" + this.props.timeElapsedMin : this.props.timeElapsedMin}:{this.props.timeElapsedSec < 10 ? "0" + this.props.timeElapsedSec : this.props.timeElapsedSec}
        </h1>
      </div>
    )
  }
}

module.exports = Picture;
