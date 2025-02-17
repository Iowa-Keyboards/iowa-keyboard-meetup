const { DateTime } = require('luxon')

const nth = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:  return 'st'
        case 2:  return 'nd'
        case 3:  return 'rd'
        default: return 'th'
    }
}

module.exports = {
  formattedDate: (date) => {
      const d = new Date(date)
      const month = d.toLocaleString('default', { month: 'long' })
      const day = d.getDate()
      const nominal = nth(d.getDate())
      const year = d.getFullYear()

      return `${month} ${day}, ${year}`
  },
  formattedDateNoYear: (date) => {
      const d = new Date(date)
      const month = d.toLocaleString('default', { month: 'long' })
      const day = d.getDate()
      const nominal = nth(d.getDate())
      const year = d.getFullYear()

      return `${month} ${day} ${year}`
  },
  inFuture: (date) => {
    return new Date(date) >= new Date()
  },
  inPast: (date) => {
    return new Date(date) < new Date()
  }
}
