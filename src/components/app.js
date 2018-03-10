import React, { Component } from 'react'
import moment from 'moment'
import axios from 'axios';
import { GOOGLE_API_KEY, CALENDAR_ID, CLIENT_ID, CLIENT_SECRET } from '../config.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: moment().format("dd, Do MMMM, h:mm A"),
      events: [],
      isBusy: false
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
          that.setStatus();
        })
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

  setStatus = () =>{
    let now = moment();
    let events = this.state.events;
    for (var e = 0; e < events.length; e++) {
      var eventItem = events[e];
      if (moment(now).isBetween(moment(eventItem.start.dateTime), moment(eventItem.end.dateTime))) {
        this.setState({
          isBusy: true
        })
      }
  }

    moment().isAfter();
    moment().isBetween(moment-like, moment-like);
  }

  render(){    
    const {time, events} = this.state;
    let eventsList = events.map(function(event){
      return(
        <a className="list-group-item" href={event.htmlLink} target="_blank" key={event.id}>{event.summary} <span className="badge">{moment(event.start.dateTime).format('h:mm a')}, {moment(event.end.dateTime).diff(moment(event.start.dateTime), 'minutes')} minutes, {moment(event.start.dateTime).format('MMMM Do')} </span></a>
      )
    });
    return(
      <div className="container">
        <div className={this.state.isBusy ? "current-status busy" : "current-status open"}>
          <h1>{this.state.isBusy ? "BUSY" : "OPEN"}</h1>
        </div>
        <div className="upcoming-meetings">
          <div className="current-time">
            {time}, 2018
          </div>
          <h1>Upcoming Meetings</h1>
          <div className="list-group">
            {eventsList.length > 0 ? eventsList : "Loading..."}
          </div>
          <a className="primary-cta" href="https://calendar.google.com/calendar?cid=c3FtMnVkaTFhZGY2ZHM3Z2o5aDgxdHVldDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" target="_blank">+</a>
        </div>
      </div>
    )
  }
}
