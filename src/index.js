import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const css = require('./stylesheets/style.scss');

class App extends React.Component{
  componentDidMount(){
    const CALENDAR_ID = 'tb8ckdrm61bdsj6jfm7khob4u5@group.calendar.google.com'
    const API_KEY = 'AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp'
    let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
  }
  render(){
    return(
      <h1>Hi</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
