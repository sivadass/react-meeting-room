// import moment from 'moment'
import * as moment from 'moment-mini'

/*
 * Handles events that occur every 'n' number of days
 * (e.g. every day, every 5 days)
 */

const handleDaily = (calendar, recurrence, e) => {
  const start = moment(e.start.dateTime)
  const end = moment(e.end.dateTime)
  const wtfGoogle = (e.recurrence[0].split(";").pop().split("=").pop() != "DAILY")
    ? parseInt(e.recurrence[0].split(";").pop().split("=").pop())
    : 1
  const n = wtfGoogle
  let add = wtfGoogle
  let reoccurringEvents = []

  while (recurrence > 0) {
    const reoccurringEvent = {
      eventType: calendar.name,
      creator: e.creator,
      end: end.clone().add(add, 'days')._d,
      gLink: e.htmlLink,
      description: e.description,
      location: e.location,
      start: start.clone().add(add, 'days')._d,
      title: e.summary,
      meta: e
    }
    reoccurringEvents.push(reoccurringEvent)
    recurrence --
    add += n
  }
  return reoccurringEvents
}

export default handleDaily
