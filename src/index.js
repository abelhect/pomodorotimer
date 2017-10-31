import './css/main.css';
import m4r from './sounds/cuckoo-cuckoo-clock.m4r';
import './images/pomodoro.ico';
import React from 'react';
import ReactDOM from 'react-dom';
import PomodoroTimer from './components/pomodoro-timer.jsx';

ReactDOM.render(
  <PomodoroTimer workingTime={1} sound={m4r}/>,
    document.getElementById("app")
);
