import { SessionStorage, Times } from '../constants'

// export const getLastTenCurrencyList = (link, handleCurrencyList) => {
//   let counter = 0
//   const arrayOfLatestCurrencyLists = []
//   let currentLink = link
//   const fetchData = async () => {
//     const response = await fetch(currentLink)
//     const data = await response.json()
//     currentLink = data.PreviousURL
//     arrayOfLatestCurrencyLists.push(data)
//     // eslint-disable-next-line no-plusplus
//     counter++
//     if (counter >= 10) {
//       clearInterval(timerId)
//       sessionStorage.setItem(
//         SessionStorage.CurrencyKey,
//         JSON.stringify(arrayOfLatestCurrencyLists),
//       )
//       handleCurrencyList(arrayOfLatestCurrencyLists)
//     }
//   }
//   const timerId = setInterval(fetchData, Times.FetchLatestCurrencyListsInterval)
// }
export const getLastTenCurrencyList = (link, handleList) => {
  let counter = 0
  const arrayOfLatestCurrencyLists = []
  let currentLink = link
  const fetchData = async () => {
    const response = await fetch(currentLink)
    const data = await response.json()
    currentLink = data.PreviousURL
    arrayOfLatestCurrencyLists.push(data)
    // eslint-disable-next-line no-plusplus
    counter++
    if (counter < 10) setTimeout(fetchData, Times.FetchLatestCurrencyListsInterval)
    if (counter >= 10) {
      clearTimeout(timeId)
      sessionStorage.setItem(
        SessionStorage.CurrencyKey,
        JSON.stringify(arrayOfLatestCurrencyLists),
      )
      handleList(arrayOfLatestCurrencyLists)
    }
  }
  const timeId = setTimeout(fetchData, Times.FetchLatestCurrencyListsInterval)
}
