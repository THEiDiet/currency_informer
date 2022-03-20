import { SessionStorage, Times } from '../constants'

export const getLastTenCurrencyList = (link, handleCurrencyList) => {
  let counter = 0
  const arrayOfLatestCurrencyLists = []
  let currentLink = link
  const fetchData = async () => {
    const response = await fetch(currentLink)
    // eslint-disable-next-line no-debugger
    // debugger
    const data = await response.json()
    currentLink = data.PreviousURL
    arrayOfLatestCurrencyLists.push(data)
    // eslint-disable-next-line no-plusplus
    counter++
    if (counter >= 10) {
      clearInterval(timerId)
      sessionStorage.setItem(
        SessionStorage.CurrencyKey,
        JSON.stringify(arrayOfLatestCurrencyLists),
      )
      handleCurrencyList(arrayOfLatestCurrencyLists)
    }
  }
  const timerId = setInterval(fetchData, Times.FetchLatestCurrencyListsInterval)
}
