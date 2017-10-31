// import React, {Component} from 'react';
var React = require('react');

class Title extends React.Component{
// class Title extends Component{
  render(){
    return(
      <div className="title-div">
        <h1 className="title">POMODORO TIMER</h1>
      </div>
    )
  }
}

module.exports = Title;
