const dateTime = new Intl.DateTimeFormat('de', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  minute: '2-digit',
  hour: '2-digit',
  hour12: false
})

export {
  dateTime
}
