// import React, {Component} from 'react';
var React = require('react');

var Title = require('./title.jsx');
var SetTime = require('./set-time.jsx');
var Start = require('./start.jsx');
var Picture = require('./picture.jsx');
var image = require('../images/redDeliciousTomato.jpg');



class PomodoroTimer extends React.Component{
// class PomodoroTimer extends Component{

  //constructor is crucial for state.  It fires once everytime the component is called
  constructor(props){
    super(props);
    this.state = {
      timeElapsed: 0,
      timeElapsedMinutes: 0,
      timeElapsedSeconds: 0,
      start: 0,
      timeSet: ''
    };
  }

  handleTimeSet(input){
    this.setState({timeSet: input});
  }

  componentDidMount(trigger) {
    //*****need to make the start date x minutes in the future to count down
    //start state = current time in milliseconds + workingtime in milliseconds
    this.setState({start: trigger});

    if (this.state.start !== 0){
      if (this.state.timeSet === ''){
        alert("Please insert a desired time in minutes and click on \"Set Timer\", then click \"Start\"");
      } else {
        this.interval = setInterval(this.elapseTime.bind(this),1000);
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  elapseTime() {
    //how much time has elapsed?
    //*****this guys here needs to be the time not the Date
    var currentTime = new Date().getTime();

    //var timeElapsed = CURRENT TIME - START TIME*/
    //*****need to reverse this formula to be future time - currentTime and get rid of the /1000
    var timeElapsed = Math.round(this.state.start - currentTime);
    // var timeElapsed = Math.round((currentTime - this.state.start)/1000);

    //******formulas for minutes and seconds
    //the minutes is 30 seconds behind so i had to substract 30 secs from timeElapsed for the minutes
    var timeElapsedMinutes = Math.round(((timeElapsed-30000) % (1000 * 60 * 60)) / (1000 * 60));
    var timeElapsedSeconds = Math.round((timeElapsed % (1000 * 60)) / 1000);

    //setting the new state of timeElapsed for printing on DOM
    this.setState({timeElapsed: timeElapsed});
    // *****update the states for the secs and mins
    this.setState({timeElapsedMinutes: timeElapsedMinutes});
    this.setState({timeElapsedSeconds: timeElapsedSeconds});
    // *****changed the workingTime to milliseconds cause timeElapsed is in milliseconds
    if (this.state.timeElapsed <= 1){
      clearInterval(this.interval);
      // zero out the values for minutes and seconds for the display
      this.setState({timeElapsedMinutes: 0});
      this.setState({timeElapsedSeconds: 0});
      document.getElementById("cuckoo").play();
      setTimeout(function(){
        alert("Your time is up.  TAKE A 5 MINUTE BREAK!");
      },1000);
    }
  }

    render (){
      return (
        <div className="pomodoro-timer">
          <Title/>
          <SetTime onSet={this.handleTimeSet.bind(this)}/>
          <Start onPress={this.componentDidMount.bind(this)} workingTime={this.state.timeSet}/>
          <Picture img={image} timeElapsedMin = {this.state.timeElapsedMinutes} timeElapsedSec = {this.state.timeElapsedSeconds}/>
          <audio id="cuckoo" src={this.props.sound} preload="auto"></audio>
        </div>
      )
    }
}

module.exports = PomodoroTimer;
