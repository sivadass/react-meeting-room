import React, { Component } from 'react'
import moment from 'moment'
import axios from 'axios';
import { GOOGLE_API_KEY, CALENDAR_ID, CLIENT_ID, CLIENT_SECRET } from '../config.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: moment().format("dd, Do MMMM, h:mm A"),
      events: []
    }
  }

  componentDidMount = () => {
    setInterval(this.tick, 1000);
    this.getEvents();
  }

  getEvents(){
    let that = this;
    function start() {
      gapi.client.init({
        'apiKey': GOOGLE_API_KEY
      }).then(function() {
        return gapi.client.request({
          'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
        })
      }).then( (response) => {
        let events = response.result.items
        that.setState({
          events
        }, ()=>{
          console.log(that.state.events);
        })
        console.log(events);
      }, function(reason) {
        console.log(reason);
      });
    }
    gapi.load('client', start)
  }

  tick = () =>{
    let time = moment().format("dddd, Do MMMM, h:mm A");
    this.setState({
      time: time
    })
  }

  render(){    
    const {time, events} = this.state;
    let eventsList = events.map(function(event){
      return(
        <a className="list-group-item" href={event.glink} target="_blank" key={event.id}>{event.summary} <span className="badge">{moment(event.start.dateTime).format('MMMM Do YYYY, h:mm:ss a')}</span></a>
      )
    });
    return(
      <div className="container">
        <div className="current-status open">
          <h1>BUSY</h1>
        </div>
        <div className="upcoming-meetings">
          <div className="current-time">
            {time}, 2018
          </div>
          <h2>Upcoming Meetings</h2>
          <div className="list-group">
            {eventsList.length > 0 ? eventsList : "Loading..."}
          </div>
          <a href="https://calendar.google.com/calendar?cid=c3FtMnVkaTFhZGY2ZHM3Z2o5aDgxdHVldDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" target="_blank">ADD NEW MEETING</a>
        </div>
      </div>
    )
  }
}
