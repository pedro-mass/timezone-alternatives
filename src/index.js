const dateFns = require('date-fns')
const moment = require('moment-timezone')
const dayjs = require('dayjs')
const timeZone = require('dayjs-ext/plugin/timeZone')
dayjs.extend(timeZone)
require('timezone-support')

const timestamp = 1536901200000
const timezone = 'America/Denver'
const offset = -21600 // in seconds
const formatString = 'MM/DD/YYYY dddd hh:mma Z'

const momentString = moment(timestamp)
  .tz(timezone)
  .format(formatString)
const utcString = moment(timestamp)
  .tz('UTC')
  .format(formatString)

const offsetTimestamp = dateFns.subSeconds(timestamp, offset)
const dateFnString = dateFns.format(offsetTimestamp, formatString)

const dayString = dayjs(timestamp).format(formatString, {
  timeZone: timezone,
})

console.log({
  timestamp,
  offsetTimestamp: offsetTimestamp.getTime(),
  momentString,
  dateFnString,
  areSame: momentString === dateFnString,
  utcString,
  dayString,
})
