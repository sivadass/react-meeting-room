import React, { Component } from 'react'
import moment from 'moment'

import { GOOGLE_API_KEY } from '../config.js'
import GoogleCalendar from '../utils/GoogleCalendar'

const calendars = [
  {
    name: 'Meeting Room',
    url: 'psdueq5a33so3e17updn7ot394@group.calendar.google.com'
  }
]
const dailyRecurrence = 100
const weeklyRecurrence = 50
const monthlyRecurrence = 10

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: moment().format("dddd, Do MMMM, h:mm A"),
      events: []
    }
  }

  componentDidMount = () => {
    this.getGoogleCalendarEvents();
    console.log(this.state.events);
    setInterval(this.tick, 1000);
  }
  tick = () =>{
    let time = moment().format("dddd, Do MMMM, h:mm A");
    this.setState({
      time: time
    })
  }
  getGoogleCalendarEvents = () => {
    /*
     * @param {string} GOOGLE_API_KEY - your Google API key
     * @param {array} calendars - a list of key, value pairs
     *                {name: 'name of your calendar', url: 'calendar_url'}
     * @param {number} dailyRecurrence - how many times you want daily events to reoccur
     * @param {number} weeklyRecurrence - how many times you want weekly events to reoccur
     * @param {number} monthlyRecurrence - how many times you want monthly events to reoccur
     *
     * @returns {array} events - list of objects that will render on react-big-calendar
     *   e.x. event = {
     *           eventType: {string} calendar.name
     *           creator: {string}
     *           end: Datetime
     *           gLink: {string} link to event in Google Calendar,
     *           description: {string},
     *           location: {string}
     *           start: Datetime
     *           title: {string} summary
     *           meta: {object} - everything about the event Google returns
     *        }
     */
    GoogleCalendar.getAllCalendars(GOOGLE_API_KEY, calendars, dailyRecurrence, weeklyRecurrence, monthlyRecurrence)
      .then(events => this.setState({events: events}, function(){console.log(this.state.events)}) )
      .catch(err => { throw new Error(err) })
  }
  render(){
    let time = this.state.time;
    let events = this.state.events;
    let eventsList = events.map(function(event){
      return(
        <a className="list-group-item" href={event.glink} target="_blank" key={event.title}>{event.title} <span className="badge">{moment(event.start).format('MMMM Do YYYY, h:mm:ss a')}</span></a>
      )
    });
    return(
      <div className="container">
        <div className="current-status open">
          <h1>OPEN</h1>
        </div>
        <div className="upcoming-meetings">
          <div className="current-time">
            {time}
          </div>
          <h1>Upcoming Meetings</h1>
          <div className="list-group">
            {eventsList.length > 0 ? eventsList : "Loading events, please wait"}
          </div>
        </div>
      </div>
    )
  }

}
