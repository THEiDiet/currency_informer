export const getFilteredList = (keysOfValute, list) => {
  const dates = []
  const currencyObject = {}
  keysOfValute.forEach(key => {
    currencyObject[key] = []
    return key
  })
  list.forEach(elem => {
    dates.push(elem.Date.split('T11')[0].split('-').join('.'))
    keysOfValute.forEach(key => {
      currencyObject[key] = [...currencyObject[key], elem.Valute[key].Value]
      return key
    })
  })
  return { currencyObject, dates }
}
