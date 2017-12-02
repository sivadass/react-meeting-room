import React, { Component } from 'react'

import styles from './Docs.scss'

export default class Docs extends Component {

  render = () =>
    <div className={styles['docs-container']}>

      <div className={styles['section']}>
        <div className={styles['title']}>About</div>
        <div className={styles['section-body']}>
        React Google Calendar is an implementation of <a className={styles['link']} href='https://github.com/intljusticemission/react-big-calendar' target="_blank">react-big-calendar</a> that imports events from synched Google calendars and populates the displayed calendar.
        </div>
      </div>

      <div className={styles['section']}>
        <div className={styles['title']}>Getting started</div>
        <div className={styles['section-body']}>
          <ul>
            <li>Clone the git repository: <span className={styles['code']}>git clone https://github.com/crashspringfield/react-google-calendar.git </span></li>
            <li>Add your API key <span className={styles['code']}>./public/src/js/config.js</span></li>
            <li><span className={styles['code']}>npm install && npm start</span></li>
          </ul>
          <p>Check out the <a href="https://docs.simplecalendar.io/google-api-key/" target="_blank">Simple Calendar documentation</a> for a great guide to getting an API key</p>
        </div>
      </div>

      <div className={styles['section']}>
        <div className={styles['title']}>How it works</div>
        <div className={styles['section-body']}>
          By implementing various algorithms to duplicate reoccuring events, the function <span className={styles['code']}>GoogleCalendar.getAllCalendars()</span> returns a promise of a list of the events taken from the Google Calendar.
          It takes five parameters:
          <ul>
            <li>Your API key: <span className={styles['code']}>GOOGLE_API_KEY</span></li>
            <li>A list of calendar objects: <span className={styles['code']}>[ {'{'}name: 'whatever name you want', url: 'calendarURL'{'}'} ]</span>*</li>
            <li>How many of each reoccuring-daily events you want: <span className={styles['code']}>dailyRecurrence</span>**</li>
            <li>How many of each reoccuring-weekly events you want: <span className={styles['code']}>weeklyRecurrence</span>**</li>
            <li>How many of each reoccuring-monthly events you want: <span className={styles['code']}>monthlyRecurrence</span>**</li>
          </ul>
          <p>
            * You can get your calendarURL by going to <a href="https://calendar.google.com/calendar" target="_blank">https://calendar.google.com/calendar</a>, selecting
              your calendar and clicking <b>'Share this calendar'</b>. Next. click <b>'Make this calendar public'</b>.
            At the top, select <b>'Calendar Details'</b>, scroll down to <b>'Calendar Address'</b>, and get the Calendar ID
            (e.g. the one used for the demo looks like <i>'srg23q1tm95o05u36lec0ilkt4@group.calendar.google.com'</i>).
          </p>
          <p>
          ** These last three are to keep you from getting back too many events, or to allow you go get events far into the future of when they were created.
          </p>
        </div>
      </div>

      <div className={styles['section']}>
        <div className={styles['title']}>Contributing</div>
        <div className={styles['section-body']}>
          <p>
          Post bugs and issues to <a href="https://github.com/crashspringfield/react-google-calendar" target="_blank">our Github</a>. If you'd like to contribute or extend the calendar's
          features, create a branch with the feature.
          </p>
          <div className={styles['subtitle']}>Known Issues:</div>
          <div className={styles['issue']}>
            Right now, react-google-calendar handles only the following
            <ul>
              <li>Single events</li>
              <li>Events reoccuring daily or every n number of days</li>
              <li>Events reoccuring the same day every week</li>
              <li>Events reoccuring the same date every month</li>
              <li>Events reoccuring the same day of the month</li>
            </ul>
            There are infinite edge cases left out. If you find a case that is not currently supported,
            raise an issue or give it a shot and take out a pull request.
          </div>
        </div>
      </div>

    </div>
}
