import moment from 'moment'

/*
 * Handles events that occure the same date of every month
 * (e.g. the 1st, the 8th)
 */

 const handleDateOfMonth = (calendar, recurrence, e) => {
   const start = moment(e.start.dateTime)
   const end = moment(e.end.dateTime)
   let reoccurringEvents = []
   let add = 1

   while (recurrence > 0) {
     const reoccurringEvent = {
       eventType: calendar.name,
       creator: e.creator,
       end: end.clone().add(add, 'months')._d,
       gLink: e.htmlLink,
       description: e.description,
       location: e.location,
       start: start.clone().add(add, 'months')._d,
       title: e.summary,
       meta: e
     }
     reoccurringEvents.push(reoccurringEvent)
     recurrence --
     add ++
   }
   return reoccurringEvents
 }

export default handleDateOfMonth
