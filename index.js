const fetch = require('node-fetch');
const moment = require('moment-timezone')

function resetDyno () {
  fetch(process.env.REST_DYNO_URL)
  console.log('==================================================')
  console.log('restart dyno with hook')
  console.log('==================================================')
}

setInterval(() => {
  const date = moment().tz("Asia/Ho_Chi_Minh")
  const hour = date.hour()
  console.log('hour', hour)
  if (hour >= 0 && hour <= 6) {

  } else {
    resetDyno()
  }
}, 30 * 60 * 1000)