import axios from 'axios'
//import * as Promise from 'bluebird'
import * as Promise from 'es6-promise'

import { handleDaily, handleDateOfMonth, handleDayOfMonth, handleWeekly } from './algorithms'

export default {

  getAllCalendars: (GOOGLE_API_KEY, calendars, dailyRecurrence, weeklyRecurrence, monthlyRecurrence) => Promise.map(calendars, (calendar) => {
    return axios.get(`https://content.googleapis.com/calendar/v3/calendars/${calendar.url}/events?key=${GOOGLE_API_KEY}`)
      .then(res => {
        const items = res.data.items.filter(item => item.status != "cancelled")
        const oneTime = items.filter(item => !item.recurrence).map(e => {
          // account for all day events
          const start = e.start.date ? new Date(`${e.start.date}T08:00:00`) : new Date(e.start.dateTime)
          const end = e.end.date ? new Date(`${e.start.date}T05:00:00`) : new Date(e.end.dateTime)
          return {
            title: e.summary,
            eventType: calendar.name,
            start: start,
            end: end,
            description: e.description,
            location: e.location,
            glink: e.htmlLink,
            meta: e
          }
        })
        const reoccurring = items.filter(item => item.recurrence)
          .map(event => {
            const r = event.recurrence[0].split(';')
            return { e: event, r }
          })

        const daily = reoccurring.filter(item => item.r[0] == "RRULE:FREQ=DAILY")
          .map(item => item.e)
        const reoccurringDaily = [].concat.apply([], daily
          .map(e => handleDaily(calendar, dailyRecurrence, e)))

        const weekly = reoccurring.filter(item => item.r[0] == "RRULE:FREQ=WEEKLY")
          .map(item => item.e)
        const reoccurringWeekly = [].concat.apply([], weekly
          .map(e => handleWeekly(calendar, weeklyRecurrence, e)))

        const monthly = reoccurring.filter(item => item.r[0] == "RRULE:FREQ=MONTHLY")
        const dateOfMonth = monthly.filter(item => item.r[item.r.length - 1].includes("TH") )
          .map(item => item.e)
        const dayOfMonth = monthly.filter(item => !item.r[item.r.length - 1 ].includes("TH") )
          .map(item => item.e)

        const reoccurringDateOfMonth = [].concat.apply([], dateOfMonth
          .map(e => handleDateOfMonth(calendar, monthlyRecurrence, e)))
        const reoccurringDayOfMonth = [].concat.apply([], dayOfMonth
          .map(e => handleDayOfMonth(calendar, monthlyRecurrence, e)))

        const allEvents = [].concat(
          oneTime,
          reoccurringDaily,
          reoccurringWeekly,
          reoccurringDateOfMonth,
          reoccurringDayOfMonth
        )
        return allEvents
      })
  })
  .then(allEvents => [].concat.apply([], allEvents))

}
